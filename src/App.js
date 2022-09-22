// git add .
// git commit -m "first commit"
// git@github.com:CaptivateLLC/captivate-ad-preview.git

// git remote add origin git@github.com:CaptivateLLC/captivate-ad-preview.git
// git push origin dev

// git remote set-url origin git@github.com:CaptivateLLC/captivate-ad-preview.git

import React, { useState, useEffect, useMemo, useRef } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Dropzone from "./components/Dropzone";
import AssetDisplay from "./components/AssetDisplay";
import DroppedFileAttributes from "./components/DroppedFileAttributes";
import BackgroundImages from "./components/BackgroundImages";
import ErrorMessage from "./components/ErrorMessage";
import Footer from "./components/Footer";
import separator from "./assets/separator.svg";

const displayNone = {
  display: "none",
};

function App() {
  const [droppedFile, setDroppedFile] = useState({});
  const [errorMessageArray, setErrorMessageArray] = useState(["Drag and drop 16:9 creative or click a preview window to browse"]);

  const handleDropzoneChanges = (name, value) => {
    console.log("dropped from parent");
    setDroppedFile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleDropzoneErrors = (text) => {
    console.log("running handle");

    setErrorMessageArray((oldArray) => [...oldArray, text, " "]);
  };
  const clearDropzoneErrors = () => {
    console.log("running clear");
    setErrorMessageArray([]);
  };

  return (
    <div className={styles.App}>
      <Dropzone noClick={true} clearDropzoneErrors={clearDropzoneErrors} handleDropzoneErrors={handleDropzoneErrors} handleDropzoneChanges={handleDropzoneChanges}></Dropzone>
      <BackgroundImages></BackgroundImages>
      <Header></Header>

      <div className={styles.displayContainer}>
        <AssetDisplay handleDropzoneErrors={handleDropzoneErrors} handleDropzoneChanges={handleDropzoneChanges} clearDropzoneErrors={clearDropzoneErrors} label="Elevator (480x270)" droppedFile={droppedFile} width={480}></AssetDisplay>
        <img className={styles.separator} src={separator}></img>
        <AssetDisplay handleDropzoneErrors={handleDropzoneErrors} handleDropzoneChanges={handleDropzoneChanges} clearDropzoneErrors={clearDropzoneErrors} label="Large Format Display (768x432)" droppedFile={droppedFile} width={768}></AssetDisplay>
      </div>
      <ErrorMessage errorMessageArray={errorMessageArray}></ErrorMessage>
    </div>
  );
}

export default App;
