import React, { useState } from 'react'
import ReactDom from "react-dom";

import styles from "./AddFileName.module.css";

export default function AddFile(props) {

  function handleClick() {
    props.setAddFileName(false);
    props.setAddFileData(true);
  }

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <h2>Create File</h2>
        <form className={styles.enterPin}>
          <label className={styles.label} style={{ color: "grey" }}>Enter File Name</label>
          <input autoFocus type="text" onChange={e => { props.setCurrFileName(e.target.value) }} />
          <button type="button" className={styles.enter} onClick={handleClick}>Create Now</button>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  )
}
