'use client';

import styles from '@/app/styles/components/openingsList.module.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { WeekDay } from '@/lib/definitions';
import { translateDay, transformOpening } from '../utils/helpers';

const OpeningsList = () => {
  const [openings, setOpenings] = useState<WeekDay[] | null>(null);

  useEffect(() => {
    getAll().then((res) => {
      setOpenings(res);
    });
  }, []);

  const getAll = async () => {
    const response = await axios.get('/api/openings');
    return response.data;
  };

  return (
    <ul role="list" className={styles.list}>
      {openings &&
        openings.map((d) => (
          <li key={d.day} className={styles.list_item}>
            {translateDay(d.day)}:{' '}
            <span>{transformOpening(d.open, d.close)}</span>
          </li>
        ))}
    </ul>
  );
};

export default OpeningsList;
