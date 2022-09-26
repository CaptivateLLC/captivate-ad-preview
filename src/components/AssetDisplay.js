import React, { useState, useEffect, useMemo, useRef } from "react";
import styles from "./AssetDisplay.module.scss";
import bgImage from "../assets/dropzoneBGImage.png";
import Dropzone from "../components/Dropzone";

function AssetDisplay({ droppedFile, width, label, clearDropzoneErrors, handleDropzoneErrors, handleDropzoneChanges }) {
  const height = (9 * width) / 16;
  const ref = useRef(null);

  const container = {
    position: "relative",
  };

  const dropzoneAssetParent = {
    width: `${width}px`,
    height: `${height}px`,
    overflow: "hidden",
    position: "relative",
    border: "1px black solid",
  };

  const videoStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "0px",
    objectFit: "contain",
  };
  const imageStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "0px",
    objectFit: "contain",
  };

  return (
    <div className={`${styles.relative} ${styles.bottomMargin}`}>
      <Dropzone noClick={false} clearDropzoneErrors={clearDropzoneErrors} handleDropzoneErrors={handleDropzoneErrors} handleDropzoneChanges={handleDropzoneChanges}></Dropzone>
      <div className={styles.labelText}>{label}</div>
      <div ref={ref} style={dropzoneAssetParent} className={styles.dropContainer}>
        {droppedFile?.payload?.type?.includes("video") ? (
          <video autoPlay loop style={videoStyle}>
            <source src={URL.createObjectURL(droppedFile.payload)} type="video/mp4" />
          </video>
        ) : droppedFile?.payload?.type?.includes("image") ? (
          <img src={URL.createObjectURL(droppedFile.payload)} style={imageStyle}></img>
        ) : null}
      </div>
    </div>
  );
}
export default AssetDisplay;
