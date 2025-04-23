import styles from '../styles/components/decor.module.scss';

const Decor = () => {
  return (
    <div className={styles.decor_cont}>
      <div className={styles.decor_line}></div>
      <span className={styles.decor_text}>TataMoto</span>
      <div className={styles.decor_line}></div>
    </div>
  );
};

export default Decor;
