import React, { useState, useEffect, useMemo, useRef } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./Dropzone.module.scss";

const baseStyle = {
  outline: "white dashed 2px",
};

const acceptStyle = {
  boxShadow: "0px 0px 8px 1px #00e676",
};

const rejectStyle = {
  boxShadow: "0px 0px 8px 1px #ff1744",
};

function Dropzone({ handleDropzoneChanges }) {
  const [files, setFiles] = useState([]);
  const { acceptedFiles, getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    maxFiles: 1,
    noClick: false,
    multiple: false,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
      "video/mp4": [".mp4"],
    },
    onDropAccepted: (acceptedFiles) => {
      console.log("accepted");
      setFiles(
        acceptedFiles.map((myfile) =>
          Object.assign(myfile, {
            preview: URL.createObjectURL(myfile),
          })
        )
      );
      const newFile = acceptedFiles[0];
      const nameArray = newFile.name.split(".");
      const ext = nameArray[1];

      if (ext !== "mp4") {
        const i = new Image();
        i.onload = () => {
          let reader = new FileReader();
          reader.readAsDataURL(newFile);
          reader.onload = () => {
            const ratio = i.width / i.height;
            const fixedRatio = ratio.toFixed(2);
            if (fixedRatio === 7.78) {
              console.log("correct aspect ratio");
              handleDropzoneChanges("payload", newFile);
            } else {
              console.log("incorrect aspect ratio");
            }
          };
        };

        i.src = newFile.preview;
      } else {
        // need to interrogate video for its secrets
        const video = document.createElement("video");
        video.addEventListener("canplay", (event) => {
          //console.log("width = ", video.width);
          const ratio = video.videoWidth / video.videoHeight;
          const fixedRatio = ratio.toFixed(2);
          if (fixedRatio === 7.78) {
            console.log("correct aspect ratio");
            handleDropzoneChanges("payload", newFile);
          } else {
            console.log("incorrect aspect ratio ", fixedRatio);
          }
        });
        video.src = URL.createObjectURL(newFile);
      }
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragAccept, isDragReject]
  );

  return (
    <section className={styles.container}>
      <p className={styles.absoluteText}>Drop files here or click to select</p>
      <div {...getRootProps({ className: `dropzone ${styles.dropzoneContainer}` })}>
        <input {...getInputProps()} />
      </div>
    </section>
  );
}
export default Dropzone;
