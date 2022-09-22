import React from "react";
import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ errorMessageArray, errorTextAnimationRun }) => {
  return (
    <div className="ErrorMessage">
      <div className={`${styles.errorText} ${styles.relativeCenterBody} ${errorTextAnimationRun ? styles.animateIt : ""}`}>{errorMessageArray}</div>
    </div>
  );
};

export default ErrorMessage;
