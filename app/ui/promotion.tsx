'use client';

import styles from '@/app/styles/components/promotions.module.scss';
import { useEffect, useState } from 'react';
import promotionService from '@/services/promotionService';
import closeSVG from '@/public/images/xmark-solid.svg';
import attentionSVG from '@/public/images/loudspeaker-309554.svg';
import Image from 'next/image';

const Promotion = () => {
  const [isOn, setIsOn] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    try {
      promotionService.getData().then((response) => {
        const { onPromotion, text } = response;
        setIsOn(onPromotion);
        setText(text);
      });
    } catch (error) {
      console.dir(error);
    }
  }, []);

  if (!isOn) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <button className={styles.close_btn} onClick={() => setIsOn(false)}>
          <Image src={closeSVG} alt="" width={36} height={36} />
        </button>
        <Image
          src={attentionSVG}
          alt=""
          width={100}
          className={styles.attention_logo}
        />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Promotion;
