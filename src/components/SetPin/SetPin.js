import React from 'react'
import ReactDom from "react-dom";

import styles from "./SetPin.module.css";

export default function SetPin() {

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <h3>Set Pin</h3>

        <form className={styles.setPin}>
          <label>Enter New Pin</label><br />
          <input type="password" maxLength="4"/><br /><br /><br />
          <label>Confirm New Pin</label><br />
          <input type="password" maxLength="4"/>
          <button className={styles.saveChanges}>Save Changes</button>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  )
};
