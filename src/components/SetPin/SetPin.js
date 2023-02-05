import React, { useState } from 'react'
import ReactDom from "react-dom";
import { setPin } from '../../api/pin';
import styles from "./SetPin.module.css";

export default function SetPin(props) {
  const [newPin, setNewPin] = useState();
  const [cnfPin, setCnfPin] = useState();
  const [err, setErr] = useState(false);

  async function handleClick(){
    if(newPin === cnfPin){
      setErr(false);
      await setPin(newPin);
      props.setLoggedIn(true);
      props.setLocked(false);
      localStorage.removeItem("loggedIn");
      localStorage.setItem("loggedIn", "true");
      localStorage.removeItem("locked");
      localStorage.setItem("locked", "false");
      localStorage.removeItem("setting");
      localStorage.setItem("setting", "false");
      props.setSetting(false);
    }
    else setErr(true);
  }

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <h3>Set Pin</h3>

        <form className={styles.setPin}>
          <label>Enter New Pin</label><br />
          <input type="password" maxLength="4" onChange={e => {setNewPin(e.target.value)}}/><br /><br /><br />
          <label>Confirm New Pin</label><br />
          <input type="password" maxLength="4" onChange={e => {setCnfPin(e.target.value)}}/>
          {err? <p className={styles.error} style={{color: "red"}}>Pin Doesn't Match!</p>: ""}
          <button type="button" onClick={handleClick} className={styles.saveChanges}>Save Changes</button>
        </form>
      </div>
    </>,
    document.getElementById('portal')
  )
};
