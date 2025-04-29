import styles from '@/app/styles/components/header.module.scss';
import logo from '@/public/images/tatamoto-feher.svg';

import Image from 'next/image';
import NavMobile from './navMobile';
import Link from 'next/link';
import Navigation from './navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.section_left}>
        <Link href="/" className={styles.logo_wrapper}>
          <Image
            src={logo}
            alt=""
            width={65}
            height={65}
            className={styles.logo}
          />
        </Link>
      </div>

      <div className={styles.section_right}>
        <Navigation />
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
