'use client';

import styles from '@/app/styles/components/popoups.module.scss';
import { useEffect, useState } from 'react';
import promotionService from '@/services/promotionService';
import closeSVG from '@/public/images/icons/xmark-solid.svg';
import attentionSVG from '@/public/images/icons/loudspeaker-309554.svg';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.wrapper}
    >
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
        <p className={styles.promo_text}>{text}</p>
      </div>
    </motion.div>
  );
};

export default Promotion;
