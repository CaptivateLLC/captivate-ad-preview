import React from "react";
import styles from "./Footer.module.scss";
import blueCheck from "../assets/blueCheck.png";

const Footer = () => {
  return (
    <div className={`${styles.relativeCenterBody} ${styles.footerContainer}`}>
      <div className={styles.innerTextContainer}>
        <div className={styles.text}>
          <img src={blueCheck} className={styles.blueCheck}></img>For best results, please stand a few feet away from your screen while assessing the on-screen experience.
        </div>
        <div className={styles.text}>
          <img src={blueCheck} className={styles.blueCheck}></img>Ensure that all on-screen elements such as text size and QR codes are legible and funcional in both formats.
        </div>
      </div>
    </div>
  );
};

export default Footer;
