import React, { useState } from 'react'
import ReactDom from "react-dom";

import styles from "./EnterPin.module.css";

export default function EnterPin() {

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <h3>Enter Account Pin</h3>
        <form className={styles.enterPin}>
            <input autoFocus type="password" maxLength={4} name="field1"/>
            <button className={styles.enter}>Enter</button>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  )
};
