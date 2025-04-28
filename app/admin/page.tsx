'use client';

import styles from '@/app/styles/pages/admin.module.scss';
import React, { useState } from 'react';
// import loginService from '../../services/login';
import AdminForm_openings from '@/app/ui/admin/adminform-openings';
import AdminForm_promotion from '../ui/admin/adminform-promotions';
import AdminForm_vacation from '../ui/admin/adminform-vacation';
import axios from 'axios';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passText, setPassText] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorMessageText, setErrorMessageText] = useState('');

  const handlePassInputChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setPassText(target.value);
  };

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    axios.post('/api/login', { password: passText }).then((response) => {
      console.log(response);

      if (response.status === 200) {
        setIsLoggedIn(true);
      }
    });

    return;
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setPassText('');
    localStorage.removeItem('token');
  };

  if (!isLoggedIn) {
    return (
      <div className={styles.login_cont}>
        <form onSubmit={handleLogin}>
          <label htmlFor="password">Jelszó:</label>
          <input
            type="password"
            value={passText}
            onChange={handlePassInputChange}
            className=""
            id="password"
          />
          <button className="btn">OK</button>
        </form>
        {errorMessageText && (
          <p className="text-red-600 text-center font-bold">
            {errorMessageText}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <AdminForm_openings logOut={logOut} />
      <AdminForm_promotion logOut={logOut} />
      <AdminForm_vacation logOut={logOut} />
    </div>
  );
};

export default Admin;
