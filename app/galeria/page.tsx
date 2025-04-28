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
import React, { useEffect, useRef, useState } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import closeSvg from '@/public/images/xmark-solid.svg';
import nextBtn from '@/public/images/chevron-right-solid.svg';
import prevBtn from '@/public/images/chevron-left-solid.svg';

import { Virtual, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';

const Gallery = () => {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [openedBlock, setOpenedBlock] = useState<
    'garage' | 'references' | null
  >(null);

  const onClick = (e: React.SyntheticEvent) => {
    const target = e.currentTarget as HTMLDivElement;
    const index = target.dataset.index;
    const type = target.dataset.type;

    if (!type && !index) {
      throw new Error('Missing image type or index');
    }

    if (type !== 'garage' && type !== 'references') {
      throw new Error('Invalid image type');
    }

    setOpenedBlock(type);
    setActiveIndex(Number(target.dataset.index));
    setCarouselOpen(true);
  };

  return (
    <div className={styles.wrapper}>
      <section className={`${styles.garage_section} ${styles.section}`}>
        <h2 className={`title ${styles.section_title}`}>A Műhely</h2>
        <div className={styles.grid_cont}>
          {muhelyAll.map((m, index) => (
            <ImageCard
              key={index}
              index={index}
              image={m}
              type="garage"
              onClick={onClick}
            />
          ))}
        </div>
      </section>

      <section className={`${styles.garage_section} ${styles.section}`}>
        <h2 className={`title ${styles.section_title}`}>Munkáim</h2>
        <div className={styles.grid_cont}>
          {motorAll.map((m, index) => (
            <ImageCard
              key={index}
              index={index}
              image={m}
              type="references"
              onClick={onClick}
            />
          ))}
        </div>
      </section>

      {carouselOpen && (
        <ImageCarousel
          garageArr={muhelyAll}
          refsArr={motorAll}
          openedBlock={openedBlock}
          activeIndex={activeIndex}
          setCarouselOpen={setCarouselOpen}
        />
      )}
    </div>
  );
};

const ImageCarousel = ({
  garageArr,
  refsArr,
  openedBlock,
  activeIndex,
  setCarouselOpen,
}: {
  garageArr: StaticImageData[];
  refsArr: StaticImageData[];
  openedBlock: 'garage' | 'references' | null;
  activeIndex: number | null;
  setCarouselOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [usedImgArray, setUsedImgArray] = useState<StaticImageData[] | null>(
    null
  );
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    setCurrentIndex(activeIndex);
    setUsedImgArray(openedBlock === 'garage' ? garageArr : refsArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasValidIndex =
    (usedImgArray && currentIndex) || (usedImgArray && currentIndex === 0);

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.card_outer_wrap}>
        <button
          className={styles.stepper_right}
          onClick={() => swiperRef.current!.slideNext()}
        >
          <Image
            src={nextBtn}
            alt="galéria léptetése jobbra"
            width={50}
            height={50}
          />
        </button>
        <button
          className={styles.stepper_left}
          onClick={() => swiperRef.current!.slidePrev()}
        >
          <Image
            src={prevBtn}
            alt="galéria léptetése balra"
            width={50}
            height={50}
          />
        </button>
        <button
          className={styles.close_btn}
          onClick={() => setCarouselOpen(false)}
        >
          <Image src={closeSvg} alt="" width={50} height={50} />
        </button>
        <div className={styles.modal_card}>
          {hasValidIndex && (
            <>
              <Swiper
                modules={[Virtual, Navigation]}
                initialSlide={activeIndex!}
                spaceBetween={50}
                slidesPerView={1}
                virtual
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                {usedImgArray.map((slideContent, index) => (
                  <SwiperSlide key={index} virtualIndex={index}>
                    <Image
                      src={slideContent}
                      alt="motor szerelés közben, kép a galériából"
                      width={650}
                      height={650}
                      className={styles.picture}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
