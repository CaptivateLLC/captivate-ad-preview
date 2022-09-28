import React, { useState, useEffect, useMemo, useRef } from "react";
import styles from "./AssetDisplay.module.scss";
import bgImage from "../assets/dropzoneBGImage.png";
import Dropzone from "../components/Dropzone";

function AssetDisplay({ droppedFile, width, label, clearDropzoneErrors, handleDropzoneErrors, handleDropzoneChanges }) {
  const height = (9 * width) / 16;
  const ref = useRef(null);
  let firstRun = true;

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

  useEffect(() => {
    if (Object.keys(droppedFile).length > 0 && droppedFile.payload !== null) {
      const el = ref.current;
      let elemNew;
      if (droppedFile.payload.type.includes("video")) {
        elemNew = document.createElement("video");
        elemNew.autoplay = true;
        elemNew.loop = true;
        elemNew.src = URL.createObjectURL(droppedFile.payload);
        const options = { childList: true };
      } else {
        elemNew = document.createElement("img");
        elemNew.setAttribute("src", URL.createObjectURL(droppedFile.payload));
      }
      elemNew.style = "position: absolute; width: 100%; height: 100%; left: 0px; object-fit: contain";

      while (el.firstChild) {
        el.removeChild(el.lastChild);
      }
      setTimeout(() => {
        el.appendChild(elemNew);
      }, 100);
    }
  }, [droppedFile.payload]);

  return (
    <div className={`${styles.relative} ${styles.bottomMargin}`}>
      <img className={styles.imageStyle} src={bgImage}></img>
      <Dropzone noClick={false} clearDropzoneErrors={clearDropzoneErrors} handleDropzoneErrors={handleDropzoneErrors} handleDropzoneChanges={handleDropzoneChanges}></Dropzone>

      <div className={styles.labelText}>{label}</div>
      <div ref={ref} style={dropzoneAssetParent} className={styles.dropContainer}></div>
    </div>
  );
}
export default AssetDisplay;
