import styles from '@/app/styles/pages/admin.module.scss';

import React, { useEffect, useState } from 'react';
import { Checkbox } from '@mui/material';
import promotionService from '@/services/promotionService';

const AdminForm_promotion = ({ logOut }: { logOut: () => void }) => {
  const [checked, setChecked] = useState(false);
  const [fieldText, setFieldText] = useState('');
  const [successMessageOn, setSuccessMessage] = useState(false);
  const [errorMessage, setErrormessage] = useState(false);

  useEffect(() => {
    promotionService.getData().then((current) => {
      setChecked(current.onPromotion);
      setFieldText(current.text);
    });
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      await promotionService.setPromotion({
        onPromotion: checked,
        text: fieldText,
      });

      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
    } catch (error) {
      setErrormessage(true);
      setTimeout(() => {
        setErrormessage(false);
      }, 3000);
      console.log(error);
    }
  };

  const toggleOnPromotion = () => {
    setChecked(!checked);
  };

  const handlePromoTextInput = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setFieldText(target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className="title">Futó promóció</h2>
      <div className={styles.checkbox_wrapper}>
        <label htmlFor="promo">aktív</label>
        <Checkbox
          id="promo"
          checked={checked}
          onChange={toggleOnPromotion}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
      <textarea
        className={styles.textarea}
        value={fieldText}
        onChange={handlePromoTextInput}
      ></textarea>

      <div className={styles.buttons_cont}>
        <button className={styles.submit_btn} type="submit">
          Mentés
        </button>
        <button type="button" className={styles.logout_btn} onClick={logOut}>
          Kijelentkezek
        </button>
      </div>
      {successMessageOn && (
        <div className={styles.success_msg}>Mentés sikeres</div>
      )}
      {errorMessage && (
        <div className={styles.error_msg}>Hiba történt a mentés során</div>
      )}
    </form>
  );
};

export default AdminForm_promotion;
