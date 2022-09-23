import React from "react";
import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ errorMessageString, errorTextAnimationRun }) => {
  return (
    <div className="ErrorMessage">
      <div className={`${styles.errorText} ${styles.relativeCenterBody} ${errorTextAnimationRun ? styles.animateIt : ""}`}>{errorMessageString}</div>
    </div>
  );
};

export default ErrorMessage;
