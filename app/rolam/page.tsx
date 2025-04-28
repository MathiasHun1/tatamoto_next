import styles from '@/app/styles/pages/about.module.scss';
import Decor from '../ui/decor';
import scooterImg from '@/public/images/scooter.jpg';

import Image from 'next/image';

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className="title">Üdvözöllek az oldalamon!</h1>
        <p className="body_text">
          Ha már eddig eljutottál akkor jó helyen jársz, amennyiben a motorodat
          szeretnéd javíttatni, szervizeltetni. Jómagam is aktívan motorozok, és
          tudom hogy mennyire bosszantó, ha a technika nem úgy működik, ahogy
          szeretném.
        </p>
      </div>

      <div>
        <h2 className="title">Mire számíthatsz nálam?</h2>
        <p className="body_text">
          Egyedül dolgozom, és pont ezért a
          <span className={styles.accent}>
            {' '}
            munkámért felelösséget vállalok.
          </span>{' '}
          Nálam nincs dömpingszerelés, cserébe igyekszem pontos, precíz munkát
          végezni. Behozod a motort előzetes egyeztetés alapján, elmondod hogy
          mi a gondod vele, én felmérem, majd
          <span className={styles.accent}>
            {' '}
            írok egy munkalapot amin a várható költségek is szerepelnek
          </span>
          , így nem ér meglepetés a számla elkészülte után. A munkafolyamatokról
          igény szerint fotó vagy videó dokumentáció készül. Ittléte alatt a
          motorod fedett helyen van. Köszönöm hogy megtiszelsz a bizalmaddal!
        </p>
        <p className={styles.thanks}></p>
      </div>

      <div>
        <p className="body_text">*** Robogót jelenleg nem vállalok!</p>
        <Image
          src={scooterImg}
          alt="áthúzott robogó ikon"
          width={80}
          className={styles.scooter_img}
        />
      </div>
      <footer className={styles.footer}>
        <Decor />
      </footer>
    </div>
  );
};

export default Page;
