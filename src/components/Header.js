import react from "react";
import styles from "./Header.module.scss";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <div className={styles.relativeCenterBody}>
      <img className={styles.logoStyle} src={logo} />
      <div className={styles.headerTextStyle}>Standard Ad Preview v395.6</div>
      <div className={styles.subTitleText}>Drag and drop 16:9 creative or click here to browse</div>
    </div>
  );
}

export default Header;
