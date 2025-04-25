'use client';

import styles from '@/app/styles/pages/gallery.module.scss';
import muhely1 from '@/public/images/muhely-1.jpeg';
import muhely2 from '@/public/images/muhely-2.jpeg';
import muhely3 from '@/public/images/muhely-3.jpeg';
import muhely4 from '@/public/images/muhely-4.jpeg';
import muhely5 from '@/public/images/muhely-5.jpeg';

import motor1 from '@/public/images/motor-1.jpeg';
import motor2 from '@/public/images/motor-2.jpeg';
import motor4 from '@/public/images/motor-4.jpeg';
import motor5 from '@/public/images/motor-5.jpeg';
import motor6 from '@/public/images/motor-6.jpeg';
import motor7 from '@/public/images/motor-7.jpeg';
import motor8 from '@/public/images/motor-8.jpeg';
import motor9 from '@/public/images/motor-9.jpeg';
import motor10 from '@/public/images/motor-10.jpeg';
import motor11 from '@/public/images/motor-11.jpeg';
import motor12 from '@/public/images/motor-12.jpeg';
import motor13 from '@/public/images/motor-13.jpeg';
import motor14 from '@/public/images/motor-14.jpeg';
import motor15 from '@/public/images/motor-15.jpeg';
import motor16 from '@/public/images/motor-16.jpeg';
import motor17 from '@/public/images/motor-17.jpeg';
import motor18 from '@/public/images/motor-18.jpeg';
import motor19 from '@/public/images/motor-19.jpeg';

const muhelyAll = [muhely1, muhely2, muhely3, muhely4, muhely5];
const motorAll = [
  motor1,
  motor2,
  motor4,
  motor5,
  motor6,
  motor7,
  motor8,
  motor9,
  motor10,
  motor11,
  motor12,
  motor13,
  motor14,
  motor15,
  motor16,
  motor17,
  motor18,
  motor19,
];

import ImageCard from '../ui/imageCard';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Gallery = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [zoomOpenGarage, setZoomOpenGarage] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [zoomOpenRefs, setZoomOpenRefs] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex]);

  const onClick = (e: React.SyntheticEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    // setZoomOpen(true);
    setActiveIndex(Number(target.dataset.index));
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.garage_section} ${styles.section}`}>
        <h2 className={`title ${styles.section_title}`}>A Műhely</h2>
        <div className={styles.grid_cont}>
          {muhelyAll.map((m, index) => (
            <ImageCard key={index} index={index} image={m} onClick={onClick} />
          ))}
        </div>
      </div>

      <div className={`${styles.garage_section} ${styles.section}`}>
        <h2 className={`title ${styles.section_title}`}>Munkáim</h2>
        <div className={styles.grid_cont}>
          {motorAll.map((m, index) => (
            <ImageCard key={index} index={index} image={m} onClick={onClick} />
          ))}
        </div>
      </div>

      {mounted && zoomOpenGarage && createPortal(<ImageModal />, document.body)}
      {mounted && zoomOpenRefs && createPortal(<ImageModal />, document.body)}
    </div>
  );
};

const ImageModal = () => {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal_card}>MODAL</div>
    </div>
  );
};

export default Gallery;
