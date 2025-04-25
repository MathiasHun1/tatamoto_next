'use client';

import styles from '@/app/styles/pages/admin.module.scss';
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import openingService from '@/services/openingService';

const AdminForm_openings = ({ logOut }: { logOut: () => void }) => {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    day: 'monday',
    open: '',
    close: '',
  });
  const [successMessageOn, setSuccessMessage] = useState(false);
  const [errorMessage, setErrormessage] = useState(false);

  const submitDayOpening = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const { day } = formData;
    const open = checked ? null : formData.open;
    const close = checked ? null : formData.close;

    try {
      await openingService.updateDay({ day, open, close });

      setFormData({
        day: 'monday',
        open: '',
        close: '',
      });

      setChecked(false);
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.log(error);

      setErrormessage(true);
      setTimeout(() => {
        setErrormessage(false);
      }, 3000);
    }
  };

  const handleInputChange = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as HTMLSelectElement;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setChecked(target.checked);
  };

  return (
    <form onSubmit={submitDayOpening} className={styles.form}>
      <h2 className="title">Nyitvatartás</h2>
      <p>*formátum: ÓÓ.PP (pl: 8.00 - 16.30)</p>
      <div className={styles.input_flex_cont}>
        <select name="day" value={formData.day} onChange={handleInputChange}>
          <option value="monday">Hétfő</option>
          <option value="tuesday">Kedd</option>
          <option value="wednesday">Szerda</option>
          <option value="thursday">Csütörtök</option>
          <option value="friday">Péntek</option>
          <option value="saturday">Szombat</option>
          <option value="sunday">Vasárnap</option>
        </select>

        <input
          className={`${
            checked ? styles.hour_input__disabled : styles.hour_input
          }`}
          type="text"
          name="open"
          value={formData.open}
          onChange={handleInputChange}
          disabled={checked}
        />
        <span> - </span>
        <input
          className={`${
            checked ? styles.hour_input__disabled : styles.hour_input
          }`}
          type="text"
          name="close"
          value={formData.close}
          onChange={handleInputChange}
          disabled={checked}
        />

        <div className={styles.checkbox_wrapper}>
          <label htmlFor="closed">Zárva</label>
          <Checkbox
            id="closed"
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
      </div>
      <br />
      <div className={styles.buttons_cont}>
        <button type="submit" className={styles.submit_btn}>
          Mentés
        </button>
        <button type="button" onClick={logOut} className={styles.logout_btn}>
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

export default AdminForm_openings;
