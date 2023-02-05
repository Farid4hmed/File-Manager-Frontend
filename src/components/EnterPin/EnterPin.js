import React, { useState } from 'react'
import ReactDom from "react-dom";
import { verifyPin } from '../../api/api';

import styles from "./EnterPin.module.css";

export default function EnterPin(props) {
  const [thePin, setThePin] = useState();
  const [invalid, setInvalid] = useState(false);

  async function handleSubmit() {
    const result = await verifyPin(thePin);
    if (result) {
      if (result === "Authorized") {
        props.setLocked(false);
        localStorage.removeItem("locked");
        localStorage.setItem("locked", "false");
      }
      else {
        setInvalid(true);
      }
    }
  }

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <h3>Enter Account Pin</h3>
        <form className={styles.enterPin}>
          <input autoFocus type="password" maxLength={4} onChange={e => { setThePin(e.target.value) }} />
          {invalid ? <p style={{ color: "red", position: "fixed", top: "89%" }}>Invalid Pin</p> : ""}
          <button type="button" onClick={handleSubmit} className={styles.enter}>Enter</button>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  )
};
