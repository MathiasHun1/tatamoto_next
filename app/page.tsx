import styles from '@/app/styles/pages/app.module.scss';
import logo from '@/public/images/tatamoto-feher.svg';

import Image from 'next/image';

export default function Page() {
  return (
    <div className={styles.app}>
      <div className={styles.logo_wrapper}>
        <Image src={logo} alt="Tatamoto nagy logója" width={800} height={800} />
      </div>
      <h1 className={styles.title}>
        <span> Motorkerékpár szerviz</span>
        <span>Budapest XX. ker</span>
      </h1>
    </div>
  );
}
