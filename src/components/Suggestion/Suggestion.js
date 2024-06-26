import React, { useState, useEffect } from 'react'
import styles from "./Suggestion.module.css";
import { getAllFiles } from '../../api/api';

export default function Suggestion(props) {
    const [theFiles, setTheFiles] = useState([]);

    async function fetchFile() {
        const result = await getAllFiles(props.email);
        const newArray = result.filter((file) => {
            return file.fileName.includes(props.searchText);
        });
        setTheFiles(newArray);
    }

    useEffect(() => {
        if(props.searchText !== "")fetchFile();
    }, [props.searchText]);

    function handleClick(file){
        props.setCurrFolder(file.folderName);
        props.setCurrFileName(file.fileName);
        props.setFileData(file.fileData);
        props.setAddFileData(true);
        props.setSearchText("");
        props.setCanEnter(false);
    }

    return ( 
        <div className={styles.container}>
        {theFiles && theFiles.map((file, i) => (
            <div key={i} className={styles.file} onClick={() => {handleClick(file)}}>
                <svg className={styles.icon} width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7368 19.4808C15.7368 20.129 15.2113 20.6545 14.563 20.6545H1.17371C0.52549 20.6545 0 20.129 0 19.4808V1.17371C0 0.52549 0.525489 0 1.17371 0H10.3328C10.6441 0 10.9427 0.123659 11.1628 0.343773L15.393 4.57396C15.6131 4.79408 15.7368 5.09261 15.7368 5.4039V19.4808Z" fill="#69A1F8" />
                </svg>
                <p>{file.fileName}</p>
            </div>
        ))}
            


        </div>
    )
}
