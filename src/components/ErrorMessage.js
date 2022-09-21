import React from "react";
import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ errorMessage, showErrorMessage }) => {
  let displayValue = { showErrorMessage } ? "show it" : "don't show it";
  return (
    <div className="ErrorMessage">
      <div className={`${styles.errorText} ${styles.relativeCenterBody}`}>{displayValue}</div>
    </div>
  );
};

export default ErrorMessage;
