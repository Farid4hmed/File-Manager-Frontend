import React, { useState } from 'react'
import ReactDom from "react-dom";
import { addNewFolder } from '../../api/api';
import styles from "./AddFolder.module.css";

export default function AddFolder(props) {
  const [folderName, setFolderName] = useState("");

  async function handleClick() {
    await addNewFolder(folderName);
    props.setFolderModal(false);
    props.folderList.push({ "folderName": folderName });
    props.setFolderList([...props.folderList]);
  }

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <h2>Create Folder</h2>
        <form className={styles.enterPin}>
          <label className={styles.label} style={{ color: "grey" }}>Enter Folder Name</label>
          <input autoFocus type="text" onChange={e => { setFolderName(e.target.value) }} />
          <button type="button" className={styles.enter} onClick={handleClick}>Create Now</button>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  )
}
