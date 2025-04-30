import styles from '@/app/styles/components/footerSmall.module.scss';

const FooterSmall = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&copy; {year} Minden jog fenntartva</p>
    </footer>
  );
};

export default FooterSmall;
