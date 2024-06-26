import React, { useEffect } from 'react'
import { getFiles } from '../../api/api';
import styles from "./FileView.module.css";

export default function FileView(props) {

  async function fetchFiles() {
    if (props.currFolder !== "") {
      const result = await getFiles(props.currFolder, props.email);
      if (result) props.setCurrFileList(result);
      else props.setCurrFileList([]);
    }
  }


  useEffect(() => {
    fetchFiles();

  }, [props.currFolder, props.addFileData]);


  function handleDoubleClick(fileName, fileData) {
    props.setFileData(fileData);
    props.setCurrFileName(fileName);
    props.setAddFileData(true);
  }

  return (
    <div className={styles.container}>
      {props.currFileList && props.currFileList.map((file, i) => (
        <div key={i} className={styles.file} onDoubleClick={() => { handleDoubleClick(file.fileName, file.fileData) }}>
          {/* <img className={styles.image} src={require("./text.png")} alt="fileImage" /> */}

          <svg width="74" height="95" viewBox="0 0 74 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="12.473" width="68.6149" height="82.2775" rx="5" fill="#1E38C1" />
            <path d="M73.7629 82.9878C73.7629 85.7492 71.5243 87.9878 68.7629 87.9878H11.7246C8.96318 87.9878 6.72461 85.7492 6.72461 82.9878V5.00001C6.72461 2.23859 8.96319 1.52588e-05 11.7246 1.52588e-05H50.7424C52.0685 1.52588e-05 53.3402 0.526799 54.2779 1.46448L72.2984 19.485C73.2361 20.4227 73.7629 21.6945 73.7629 23.0206V82.9878Z" fill="#69A1F8" />
            <rect x="17.8503" y="36.7091" width="18.7687" height="6.28484" rx="2" fill="#1E38C1" />
            <rect x="17.8503" y="45.9269" width="42.8191" height="4.02011" rx="2" fill="#1E38C1" />
            <rect x="17.8503" y="53.6117" width="42.819" height="4.02011" rx="2" fill="#1E38C1" />
            <rect x="17.8503" y="61.2966" width="42.819" height="4.02011" rx="2" fill="#1E38C1" />
            <path d="M73.7631 20.966H52.7971V0L73.7631 20.966Z" fill="#E9F2FF" />
          </svg>

          <p>{file && file.fileName.length > 11 ? file.fileName.slice(0, 11) + "..." : file.fileName}</p>
        </div>
      ))}

    </div>
  )
}
