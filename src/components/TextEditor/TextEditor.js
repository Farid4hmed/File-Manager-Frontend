import React, { useState } from 'react'
import { addNewFile } from '../../api/api';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

import styles from "./TextEditor.module.css";

export default function TextEditor(props) {
    const theme = 'snow';
    // const theme = 'bubble';

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ align: [] }],

            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],

            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],

            ['clean'],
        ],
    };

    const placeholder = 'Compose...';

    const formats = ['bold', 'italic', 'underline', 'strike',
        'align', 'list', 'indent',
        'size', 'header',
        'color', 'background',
        'clean',];

    const { quill, quillRef } = useQuill({ theme, modules, formats, placeholder });

    // const handleChange = debounce(text => {
    //     autoSave(text);
    //     props.setSaving(true);
    //      setTimeout(() => {
    //          props.setSaving(false);
    //     }, 3000)
    // })

    React.useEffect(() => {
        if (quill) {
            if(props.fileData)quill.clipboard.dangerouslyPasteHTML(props.fileData); //initial value

            quill.on('text-change', () => {
                props.setCurrFileData(quillRef.current.firstChild.innerHTML);
                // handleChange(quillRef.current.firstChild.innerHTML);
            });
        }
    }, [quill]);

    // function debounce(cb, delay = 2000){
    //     let timeout;
    //     return(...args) => {
    //     clearTimeout(timeout);
    //     timeout = setTimeout(() => {
    //         cb(...args);
    //     }, delay)
    // }
    // }

    // async function autoSave(value) {
    //     props.setCurrFileData(value);
    //     if (props.currFileData) await addNewFile(props.currFileName, props.currFolderName, props.currFileData);
    //     else await addNewFile(props.currFileName, props.currFolderName, props.fileData);
    // }


    return (
        <div className={styles.textEditor} style={{ width: 800, height: 400 }}>
            <div ref={quillRef} />
        </div>
    )
}
