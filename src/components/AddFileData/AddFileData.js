import React, { useState, useEffect } from 'react'
import ReactDom from "react-dom";
import { addNewFile } from '../../api/api';

import styles from "./AddFileData.module.css";

export default function AddFileData(props) {
  const [currFileData, setCurrFileData] = useState();
  const [saving, setSaving] = useState(false);

  async function handleClick() {
    if (currFileData) await addNewFile(props.currFileName, props.currFolderName, currFileData);
    else await addNewFile(props.currFileName, props.currFolderName, props.fileData);
    props.setAddFileData(false);
    props.setFileData();
  }

  setTimeout(() => {
    setSaving(false);
  },5000)

  async function handleChange(event){
      setTimeout(() => {
          autoSave(event);
      }, 1000);
      setSaving(true);
  }

  async function autoSave(event){
    setCurrFileData(event.target.value);
    if (currFileData) await addNewFile(props.currFileName, props.currFolderName, currFileData);
    else await addNewFile(props.currFileName, props.currFolderName, props.fileData);
  }

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <h2>Edit File</h2>
        {saving?<p className={styles.saving}>autosaving...</p>: ""}
        <form className={styles.enterPin}>
          <textarea autoFocus type="text" onKeyDown={e => { handleChange(e) }} placeholder="Type anything here!">{props.fileData}</textarea>
          <button type="button" className={styles.enter} onClick={handleClick}>Save File</button>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  )
}
