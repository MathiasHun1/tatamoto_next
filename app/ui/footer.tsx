import styles from '@/app/styles/components/footer.module.scss';
import phone from '@/public/images/icons/phone-solid.svg';
import house from '@/public/images/icons/house-solid.svg';
import email from '@/public/images/icons/envelope-solid.svg';

import Image from 'next/image';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <Image src={phone} alt="" width={20} />
          <a href="tel:+36304147026">+3630-4147026</a>
        </li>
        <li className={styles.list_item}>
          <Image src={house} alt="" width={20} />
          <a
            href="https://www.google.com/maps/place/TataMoto+motorker%C3%A9kp%C3%A1r+jav%C3%ADt%C3%A1s+%C3%A9s+szerv%C3%ADz+Budapest/@47.430268,19.1165101,17z/data=!3m1!4b1!4m6!3m5!1s0x4741dd453e059039:0x104d089ff016db66!8m2!3d47.4302644!4d19.1190797!16s%2Fg%2F11q2qslpqq?hl=hu&entry=ttu"
            className={styles.link}
            target="_blank"
          >
            1201 Budapest Szondi utca 11
          </a>
        </li>
        <li className={styles.list_item}>
          <Image src={email} alt="" width={20} />
          <span>laszlo70@outlook.com</span>
        </li>
      </ul>

      <p className={styles.copyright}>&copy; {year} Minden jog fenntartva</p>
    </footer>
  );
};

export default Footer;
