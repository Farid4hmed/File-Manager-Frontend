import React, { useState } from 'react'
import ReactDom from "react-dom";
import { addNewFile } from '../../api/api';

import styles from "./AddFileData.module.css";

export default function AddFileData(props) {
  const [currFileData, setCurrFileData] = useState();

  async function handleClick() {
    if (currFileData) await addNewFile(props.currFileName, props.currFolderName, currFileData);
    else await addNewFile(props.currFileName, props.currFolderName, props.fileData);
    props.setAddFileData(false);
    props.setFileData();

  }
  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <h2>Edit File</h2>
        <form className={styles.enterPin}>
          <textarea autoFocus type="text" onChange={e => { setCurrFileData(e.target.value) }} placeholder="Type anything here!">{props.fileData}</textarea>
          <button type="button" className={styles.enter} onClick={handleClick}>Save File</button>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  )
}
