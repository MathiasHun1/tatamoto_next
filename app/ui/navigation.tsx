import styles from '@/app/styles/components/navigation.module.scss';
import logo from '@/public/images/tatamoto-feher.svg';
import Image from 'next/image';
import menu from '@/public/images/bars-solid.svg';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.section_left}>
        <div className={styles.logo_wrapper}>
          <Image src={logo} alt="" width={80} height={80} />
        </div>
      </div>

      <div className={styles.section_right}>
        <div className={styles.menu_wrapper}>
          <Image src={menu} alt="" width={40} height={40} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
