import styles from '@/app/styles/components/header.module.scss';
import logo from '@/public/images/tatamoto-feher.svg';

import Image from 'next/image';
import Navigation from './navigation';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.nav}>
      <div className={styles.section_left}>
        <Link href="/" className={styles.logo_wrapper}>
          <Image src={logo} alt="" width={80} height={80} />
        </Link>
      </div>

      <div className={styles.section_right}>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
