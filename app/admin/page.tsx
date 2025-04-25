'use client';

import styles from '@/app/styles/pages/admin.module.scss';
import React, { useState } from 'react';
// import loginService from '../../services/login';
import AdminForm_openings from '@/app/ui/admin/adminform-openings';
import AdminForm_promotion from '../ui/admin/adminform-promotions';
import AdminForm_vacation from '../ui/admin/adminform-vacation';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [passText, setPassText] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorMessageText, setErrorMessageText] = useState('');

  const handlePassInputChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setPassText(target.value);
  };

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // try {
    //   const response = await loginService.login(passText);
    //   const { token } = response;
    //   window.localStorage.setItem('token', token);
    //   loginService.setToken(token);
    //   setIsLoggedIn(true);
    // } catch (error) {
    //   if (error.status === 401) {
    //     setErrorMessageText('hibás jelszó');
    //   } else {
    //     setErrorMessageText('szerver probléma');
    //   }

    //   setTimeout(() => {
    //     setErrorMessageText('');
    //   }, 3000);
    // }
    // setPassText('');
    return;
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setPassText('');
    localStorage.removeItem('token');
  };

  if (!isLoggedIn) {
    return (
      <div>
        <form onSubmit={handleLogin}>
          <label>
            Jelszó:
            <input
              type="password"
              value={passText}
              onChange={handlePassInputChange}
              className="border-2 border-black px-2 dark:bg-slate-100"
              id="password"
            />
          </label>
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
