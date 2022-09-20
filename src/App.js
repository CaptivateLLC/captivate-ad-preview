// git add .
// git commit -m "first commit"
// git@github.com:CaptivateLLC/captivate-ad-preview.git

// git remote add origin git@github.com:CaptivateLLC/captivate-ad-preview.git
// git push origin dev

// git remote set-url origin git@github.com:CaptivateLLC/captivate-ad-preview.git

import React, { useState, useEffect, useMemo, useRef } from "react";
import styles from "./App.scss";
import Header from "./components/Header";
import Dropzone from "./components/Dropzone";
import AssetDisplay from "./components/AssetDisplay";
import DroppedFileAttributes from "./components/DroppedFileAttributes";
import BackgroundImages from "./components/BackgroundImages";

const displayContainer = {
  // position: "absolute",
  display: "flex",
  flexWrap: "wrap",
};

function App() {
  const [droppedFile, setDroppedFile] = useState({});

  const handleDropzoneChanges = (name, value) => {
    console.log("dropped from parent");
    setDroppedFile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <BackgroundImages></BackgroundImages>
      <Header></Header>
      <DroppedFileAttributes droppedFile={droppedFile}></DroppedFileAttributes>
      <div className="dropContainer" style={displayContainer}>
        <AssetDisplay label="Large Format Display" droppedFile={droppedFile} width={768}></AssetDisplay>
        <AssetDisplay label="Elevator" droppedFile={droppedFile} width={480}></AssetDisplay>
        <Dropzone handleDropzoneChanges={handleDropzoneChanges}></Dropzone>
      </div>
    </div>
  );
}

export default App;
