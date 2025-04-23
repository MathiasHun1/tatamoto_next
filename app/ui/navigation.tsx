'use client';

import styles from '@/app/styles/components/navigation.module.scss';
import Image from 'next/image';
import menu from '@/public/images/bars-solid.svg';
import close from '@/public/images/xmark-solid.svg';

import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={styles.nav_container}>
      <button
        className={styles.menu_button}
        onClick={() => setIsOpened(!isOpened)}
      >
        {!isOpened && <Image src={menu} alt="" width={40} height={40} />}
        {isOpened && <Image src={close} alt="" width={40} height={40} />}
      </button>

      <div
        className={`${
          isOpened ? styles.list_wrapper__active : styles.list_wrapper
        }`}
      >
        <ul className={styles.nav_list}>
          <li>
            <Link
              href="rolam"
              className={styles.link}
              onClick={() => setIsOpened(false)}
            >
              Rólam
            </Link>
          </li>

          <li>
            <Link
              href="galeria"
              className={styles.link}
              onClick={() => setIsOpened(false)}
            >
              Galéria
            </Link>
          </li>

          <li>
            <Link
              href="kapcsolat"
              className={styles.link}
              onClick={() => setIsOpened(false)}
            >
              Kapcsolat
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
