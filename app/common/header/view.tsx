import styles from "./Header.module.scss";

const HeaderView = () => (
  <div className={styles.headerWrapper}>
    <div className={styles.topHeaderMenu}>
      <div>Contact us</div>
      <div>About us</div>
    </div>
    <div className={styles.title}>Sparrow</div>
    <div></div>
  </div>
);

export default HeaderView;
