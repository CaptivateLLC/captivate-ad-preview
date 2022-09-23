import react from "react";
import styles from "./Header.module.scss";
import logo from "../assets/logo.svg";
import blueCheck from "../assets/blueCheck.svg";

function Header() {
  return (
    <div className={styles.relativeCenterBody}>
      <img className={styles.logoStyle} src={logo} />
      <div className={styles.headerTextStyle}>Standard Ad Preview v396.5</div>
      <div className={`${styles.relativeCenterBody} ${styles.headerContainer}`}>
        <div className={styles.innerTextContainer}>
          <div className={styles.text}>
            <img src={blueCheck} className={styles.blueCheck}></img>For best results, stand a few feet away from your screen
          </div>
          <div className={styles.text}>
            <img src={blueCheck} className={styles.blueCheck}></img>All elements, especially text and QR codes, should be legible in both formats
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
