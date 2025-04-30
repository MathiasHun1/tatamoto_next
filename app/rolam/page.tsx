import styles from '@/app/styles/pages/about.module.scss';
import checkMark from '@/public/images/check-solid.svg';
import motorRoadtech from '@/public/images/partners/motorroadtech-logo.png';
import hyperMoto from '@/public/images/partners/hypermoto-logo.png';

import Image from 'next/image';
// import Decor from '../ui/decor';
// import scooterImg from '@/public/images/scooter.jpg';

// import Image from 'next/image';

const Page = () => {
  return (
    <div className={styles.page}>
      <div className={styles.top_section}>
        <h1>Ki volnék én?</h1>
      </div>

      <article className={styles.content_section}>
        <div>
          <h2 className="title">Üdvözöllek az oldalamon!</h2>
          <p className="body_text">
            Jómagam is aktív motoros vagyok, így pontosan tudom hogy mennyire
            bosszantó, ha a technika nem úgy működik, ahogyan szeretném. Ez a
            tény, és általában a motorok szeretete motivált arra sok-sok évvel
            ezelőtt, hogy szakiskolát végzett, profi motorszerelővé váljak.
            Immár hosszú évek óta várom ügyfeleimet a Pesterzsébeti műhelyemben.
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
            Nálam nincs dömpingszerelés, pontos, precíz munkára törekszem.
          </p>{' '}
          <p className="body_text">
            Behozod a motort előzetes egyeztetés alapján, elmondod hogy mi a
            gondod vele, én felmérem, majd
            <span className={styles.accent}>
              {' '}
              írok egy munkalapot amin a várható költségek is szerepelnek
            </span>
            , így nem ér meglepetés a számla elkészülte után.
          </p>{' '}
          <p className="body_text">
            A munkafolyamatokról igény szerint fotó vagy videó dokumentáció
            készül. Ittléte alatt a motorod fedett helyen van.{' '}
          </p>
          <p className="body_text">Köszönöm hogy megtiszelsz a bizalmaddal!</p>
        </div>
      </article>

      <div className={styles.content_section}>
        <h2 className={styles.title_services}>Néhány szolgáltatásom:</h2>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <Image src={checkMark} alt="checkmark" width={18} height={18} />
            időszakos szervizek
          </li>
          <li className={styles.list_item}>
            <Image src={checkMark} alt="checkmark" width={18} height={18} />
            diagnosztika
          </li>
          <li className={styles.list_item}>
            <Image src={checkMark} alt="checkmark" width={18} height={18} />
            futómű felújítás
          </li>
          <li className={styles.list_item}>
            <Image src={checkMark} alt="checkmark" width={18} height={18} />
            üzemmanyagrendszer tisztítás
          </li>
          <li className={styles.list_item}>
            <Image src={checkMark} alt="checkmark" width={18} height={18} />
            motorfelújítás
          </li>
        </ul>
      </div>

      <div className={styles.reviews}>
        <h2 className={styles.section_title}>Rólam mondták...</h2>
      </div>

      <div className={styles.partners}>
        <h2 className={styles.section_title}>Partnereim</h2>
        <ul className={`${styles.partners_list} ${styles.list}`}>
          <li className={styles.list_item}>
            <a href="https://www.motorroadtech.hu/" target="_blank">
              <Image
                src={motorRoadtech}
                alt="MotorRoadtech cég-logó"
                width={150}
              />
            </a>
          </li>

          <li className={`${styles.list_item} ${styles.hyper_moto}`}>
            <a href="https://hyper-moto24.hu/" target="_blank">
              <Image src={hyperMoto} alt="Hypermoto cég-logó" width={230} />
            </a>
          </li>

          <li className={`${styles.list_item} ${styles.guest_house}`}>
            <a
              href="https://www.borostyanvendeghaz-matraderecske.hu/"
              target="_blank"
            >
              <span className={styles.logo_text}>
                &nbsp;🌿&nbsp;Bororstyán&nbsp;Vendégház&nbsp;🌿
                <br />
                Mátraderecske
              </span>
            </a>
          </li>
        </ul>
      </div>

      {/* <div>
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
      </footer> */}
    </div>
  );
};

export default Page;
