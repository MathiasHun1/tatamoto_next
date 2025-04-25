import styles from '@/app/styles/pages/admin.module.scss';
import { Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react';
import vacationService from '@/services/vacationService';

const AdminForm_vacation = ({ logOut }: { logOut: () => void }) => {
  const [checked, setChecked] = useState(false);
  const [fieldText, setFieldText] = useState('');
  const [successMessageOn, setSuccessMessage] = useState(false);
  const [errorMessage, setErrormessage] = useState(false);

  useEffect(() => {
    vacationService.getData().then((res) => {
      setChecked(res.onVacation);
      setFieldText(res.text);
    });
  }, []);

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleVacationsTextInput = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setFieldText(target.value);
  };

  const submitVacation = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const updatedData = { onVacation: checked, text: fieldText };

      vacationService.setVacation(updatedData);

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

  return (
    <form onSubmit={submitVacation} className={styles.form}>
      <h2 className="title">Szabira mentem</h2>
      <div className=" flex flex-row items-center gap-1">
        <label htmlFor="vacation">aktív</label>
        <Checkbox
          id="vacation"
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>

      <textarea
        className={styles.textarea}
        value={fieldText}
        onChange={handleVacationsTextInput}
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

export default AdminForm_vacation;
