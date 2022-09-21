import React from "react";
import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ errorMessageArray }) => {
  return (
    <div className="ErrorMessage">
      <div className={`${styles.errorText} ${styles.relativeCenterBody}`}>{errorMessageArray}</div>
    </div>
  );
};

export default ErrorMessage;
