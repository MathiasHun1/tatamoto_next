'use client';

import styles from '@/app/styles/components/popoups.module.scss';
import { useEffect, useState } from 'react';
import closeSVG from '@/public/images/xmark-solid.svg';
import vacationImg from '@/public/images/vacation.jpg';
import Image from 'next/image';
import vacationService from '@/services/vacationService';

const Vacation = () => {
  const [isOn, setIsOn] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    try {
      vacationService.getData().then((response) => {
        const { onVacation, text } = response;
        setIsOn(onVacation);
        setText(text);
      });
    } catch (error) {
      console.dir(error);
    }
  }, []);

  if (!isOn) {
    return <div></div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <button className={styles.close_btn} onClick={() => setIsOn(false)}>
          <Image src={closeSVG} alt="" width={36} height={36} />
        </button>
        <h2 className={styles.title}>Tisztelt Ügyfeleim!</h2>
        <p className={styles.vacations_text}>{text}</p>
        <div className={styles.vacation_img}>
          <Image
            src={vacationImg}
            alt=""
            width={500}
            className={styles.attention_logo}
          />
        </div>
      </div>
    </div>
  );
};

export default Vacation;
