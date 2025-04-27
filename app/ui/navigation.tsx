'use client';

import styles from '@/app/styles/components/navigation.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Navigation = () => {
  const path = usePathname();

  return (
    <nav className={styles.nav_desktop}>
      <Link
        href="/rolam"
        className={clsx(styles.link_desktop, {
          [styles.active]: path === '/rolam',
        })}
      >
        Rólam
      </Link>
      <Link
        href="/galeria"
        className={clsx(styles.link_desktop, {
          [styles.active]: path === '/galeria',
        })}
      >
        Galéria
      </Link>
      <Link
        href="/kapcsolat"
        className={clsx(styles.link_desktop, {
          [styles.active]: path === '/kapcsolat',
        })}
      >
        Kapcsolat
      </Link>
    </nav>
  );
};

export default Navigation;
