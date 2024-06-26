import React, { useState, useEffect } from 'react';
import { getFolders } from '../../api/api';
import styles from "./FolderView.module.css";
export default function FolderView(props) {
    const [currId, setCurrId] = useState();
    

    function handleClick(name){
       setCurrId(name);
       props.setCurrFolder(name);
       props.setCurrFileName("");
    }


    async function fetchFolders() {
        const result = await getFolders(props.email);
        props.setFolderList(result);
    }

    useEffect(() => {
        fetchFolders();
    }, [])
    return (
        <div className={styles.container}>
            {props.folderList && props.folderList.map((folder, i) => (
            <div key={toString(folder._id)} className={styles.bar} style={{borderStyle: props.currFolder===folder.folderName?"solid": "", borderColor: props.currFolder===folder.folderName?"blue":""}} onClick={()=>{handleClick(folder.folderName, folder._id)}}>
            <div className={styles.dummy}>
                <svg className={styles.icon} width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0559 15.7897C15.765 16.0911 15.3705 16.2604 14.9592 16.2604H2.55102C2.13966 16.2604 1.74516 16.0911 1.45428 15.7897C1.16341 15.4884 1 15.0796 1 14.6534V3.40394C1 2.97772 1.16341 2.56896 1.45428 2.26757C1.74516 1.96619 2.13966 1.79688 2.55102 1.79688H4.99533C5.88865 1.79688 6.72071 2.25093 7.20408 3.00217V3.00217C7.68744 3.75342 8.51951 4.20747 9.41282 4.20747H14.9592C15.3705 4.20747 15.765 4.37679 16.0559 4.67817C16.3468 4.97955 16.5102 5.38831 16.5102 5.81453V8.02425" stroke="#697584" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.9502 8.2251L16.2082 15.635" stroke="#697584" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.15842 7.24681C6.42806 7.17216 6.7156 7.22549 6.99539 7.22549H20.9502C21.5025 7.22549 21.9502 7.6732 21.9502 8.22549C21.9502 8.77777 21.5025 9.22549 20.9502 9.22549H9.93873C8.13169 9.22549 6.46526 10.2005 5.57993 11.7758L3.19017 16.028C2.91958 16.5095 2.31689 16.6685 1.84401 16.3832C1.37113 16.0979 1.20714 15.4763 1.47772 14.9948L5.53918 7.76808C5.55029 7.74653 5.56215 7.72543 5.57474 7.70483C5.7081 7.47005 5.92072 7.31261 6.15842 7.24681Z" fill="#697584" />
                </svg>
                <p className={styles.thefolder}>{folder.folderName}</p>
                </div>
            </div>
            ))}
        </div>
    )
}
