import React from 'react'
import styles from "./Search.module.css";

export default function Search(props) {
    function handleFocus(){
        props.setCanEnter(true);
    }
    return (
        <div className={styles.container}>
            <input onFocus={handleFocus} value = {props.canEnter? props.searchText: ""} placeholder='Search File...' onChange={e=>{props.setSearchText(e.target.value)}}/>
            <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#9EAAB7" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.0001 14L11.1001 11.1" stroke="#9EAAB7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </div>
    )
}