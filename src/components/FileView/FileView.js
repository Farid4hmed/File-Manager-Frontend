import React, { useEffect } from 'react'
import { getFiles } from '../../api/api';
import styles from "./FileView.module.css";

export default function FileView(props) {

  async function fetchFiles() {
    const result = await getFiles(props.currFolder);
    if (result) props.setCurrFileList(result);
    else props.setCurrFileList([]);
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
          <img className={styles.image} src={require("./text.png")} alt="fileImage" />
          <p>{file.fileName.length > 11 ? file.fileName.slice(0, 11) + "..." : file.fileName}</p>
        </div>
      ))}

    </div>
  )
}
