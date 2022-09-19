import react from "react";
import styles from "./Header.module.scss";
import logo from "../assets/logo.svg";

const headerPosition = {
  textAlign: "center",
};
const headerTextStyle = {
  fontSize: "40px",
  marginBottom: "20px",
  opacity: ".6",
};
const logoStyle = {
  width: "300px",
  height: "auto",
};

function Header() {
  return (
    <div style={headerPosition} className="Header">
      <img style={logoStyle} src={logo} />
      <div style={headerTextStyle}>Ad Preview 395.1</div>
    </div>
  );
}

export default Header;
