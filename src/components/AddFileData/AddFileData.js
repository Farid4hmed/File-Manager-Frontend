import React, { useState, useEffect } from 'react'
import ReactDom from "react-dom";
import { addNewFile } from '../../api/api';
import TextEditor from '../TextEditor/TextEditor';

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

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <h2>Edit File</h2>
        {saving?<p className={styles.saving}>autosaving...</p>: ""}
        <form className={styles.enterPin}>
          {/* <textarea autoFocus type="text" onKeyDown={e => { handleChange(e) }} placeholder="Type anything here!">{props.fileData}</textarea> */}
          <TextEditor fileData={props.fileData} currFileName={props.currFileName} currFolderName={props.currFolderName} currFileData={currFileData} saving={saving} setSaving={setSaving} setCurrFileData={setCurrFileData} />
          <button type="button" className={styles.enter} onClick={handleClick}>Save File</button>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  )
}
