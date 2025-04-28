import styles from '@/app/styles/pages/contacts.module.scss';
import fbImg from '@/public/images/fblogo.svg';
import googleImg from '@/public/images/google-logo.svg';

import Image from 'next/image';
import OpeningsList from '../ui/openingsList';

const Page = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.contact_block}>
        <div className={styles.location}>
          <h2 className="title">Hol találsz?</h2>
          <a
            href="https://www.google.com/maps/place/TataMoto+motorker%C3%A9kp%C3%A1r+jav%C3%ADt%C3%A1s+%C3%A9s+szerv%C3%ADz+Budapest/@47.430268,19.1165101,17z/data=!3m1!4b1!4m6!3m5!1s0x4741dd453e059039:0x104d089ff016db66!8m2!3d47.4302644!4d19.1190797!16s%2Fg%2F11q2qslpqq?hl=hu&entry=ttu"
            className={styles.link}
            target="_blank"
          >
            1201 Budapest Szondi utca 11
          </a>
        </div>
        <div className={styles.phone}>
          <h2 className="title">Telefon, email</h2>
          <a href="tel:+36304147026" className={styles.link}>
            +3630 - 4147026
          </a>
        </div>
        <div className={styles.map_cont}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.060276483078!2d19.116504776905085!3d47.43026800013665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dd453e059039%3A0x104d089ff016db66!2zVGF0YU1vdG8gbW90b3JrZXLDqWtww6FyIGphdsOtdMOhcyDDqXMgc3plcnbDrXogQnVkYXBlc3Q!5e0!3m2!1sen!2shu!4v1719217223301!5m2!1sen!2shu"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.openings}>
          <h2 className="title">Nyitvatartás</h2>
          <OpeningsList />
        </div>
        <div className={styles.social_links}>
          <h2 className="title">Kövess itt is:</h2>
          <div className={styles.social_link_icons}>
            <a href="https://www.facebook.com/pong.ping.96592" target="_blank">
              <Image src={fbImg} alt="" width={100} />
            </a>
            <a
              href="https://www.google.com/maps/place/TataMoto+motorker%C3%A9kp%C3%A1r+jav%C3%ADt%C3%A1s+%C3%A9s+szerv%C3%ADz+Budapest/@47.430268,19.1165101,17z/data=!3m1!4b1!4m6!3m5!1s0x4741dd453e059039:0x104d089ff016db66!8m2!3d47.4302644!4d19.1190797!16s%2Fg%2F11q2qslpqq?hl=hu&entry=ttu"
              target="_blank"
            >
              <Image src={googleImg} alt="" width={100} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
