import React, { useState, useEffect, useMemo, useRef } from "react";
import styles from "./App.scss";
import Header from "./components/Header";
import Dropzone from "./components/Dropzone";
import AssetDisplay from "./components/AssetDisplay";
import DroppedFileAttributes from "./components/DroppedFileAttributes";

const displayContainer = {
  width: "100%",
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
      <Header></Header>
      <DroppedFileAttributes droppedFile={droppedFile}></DroppedFileAttributes>
      <Dropzone handleDropzoneChanges={handleDropzoneChanges}></Dropzone>
      <div style={displayContainer}>
        <AssetDisplay label="Large Format Display" droppedFile={droppedFile} width={768}></AssetDisplay>
        <AssetDisplay label="Elevator" droppedFile={droppedFile} width={480}></AssetDisplay>
      </div>
    </div>
  );
}

export default App;
