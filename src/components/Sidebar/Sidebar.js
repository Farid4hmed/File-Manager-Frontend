import { useState } from 'react';
import FolderView from "../FolderView/FolderView";
import AddFolder from '../AddFolder/AddFolder';
import AddFileName from '../AddFileName/AddFileName';
import styles from "./Sidebar.module.css";
import AddFileData from '../AddFileData/AddFileData';

export default function Sidebar(props) {
    const [folderList, setFolderList] = useState([]);
    const [folderModal, setFolderModal] = useState(false);
    const [addFileName, setAddFileName] = useState(false);
    const [folderErr, setFolderErr] = useState(false);

    function handleClick() {
        props.setLocked(false);
        localStorage.removeItem("locked");
        localStorage.setItem("locked", "true");
    }

    function handleAddFolder() {
        setFolderModal(true);
    }

    function handleFileClick() {
        if (props.currFolder === "") setFolderErr(true);
        else {
            setFolderErr(false);
            setAddFileName(true);
        }
    }
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={require("./open-folder.png")} alt="logo"></img>


            <div className={styles.buttons}>
                <svg className={styles.addFile} onClick={handleFileClick} width="113" height="40" viewBox="0 0 113 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.5 10H20.5C19.9696 10 19.4609 10.2107 19.0858 10.5858C18.7107 10.9609 18.5 11.4696 18.5 12V28C18.5 28.5304 18.7107 29.0391 19.0858 29.4142C19.4609 29.7893 19.9696 30 20.5 30H32.5C33.0304 30 33.5391 29.7893 33.9142 29.4142C34.2893 29.0391 34.5 28.5304 34.5 28V16L28.5 10Z" stroke="#445EE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M28.5 10V16H34.5" stroke="#445EE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M26.5 26V20" stroke="#445EE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M23.5 23H29.5" stroke="#445EE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M44.822 25L48.406 15.2H50.422L54.006 25H52.102L51.318 22.732H47.496L46.698 25H44.822ZM47.986 21.332H50.828L49.4 17.258L47.986 21.332ZM57.8103 25.168C57.1569 25.168 56.5736 25.0093 56.0603 24.692C55.5469 24.3747 55.1409 23.9407 54.8423 23.39C54.5436 22.8393 54.3943 22.214 54.3943 21.514C54.3943 20.814 54.5436 20.1933 54.8423 19.652C55.1409 19.1013 55.5469 18.672 56.0603 18.364C56.5736 18.0467 57.1569 17.888 57.8103 17.888C58.3329 17.888 58.7903 17.986 59.1823 18.182C59.5743 18.378 59.8916 18.6533 60.1343 19.008V14.92H61.9263V25H60.3303L60.1343 24.006C59.9103 24.314 59.6116 24.5847 59.2383 24.818C58.8743 25.0513 58.3983 25.168 57.8103 25.168ZM58.1883 23.6C58.7669 23.6 59.2383 23.4087 59.6023 23.026C59.9756 22.634 60.1623 22.1347 60.1623 21.528C60.1623 20.9213 59.9756 20.4267 59.6023 20.044C59.2383 19.652 58.7669 19.456 58.1883 19.456C57.6189 19.456 57.1476 19.6473 56.7743 20.03C56.4009 20.4127 56.2143 20.9073 56.2143 21.514C56.2143 22.1207 56.4009 22.62 56.7743 23.012C57.1476 23.404 57.6189 23.6 58.1883 23.6ZM66.6631 25.168C66.0098 25.168 65.4264 25.0093 64.9131 24.692C64.3998 24.3747 63.9938 23.9407 63.6951 23.39C63.3964 22.8393 63.2471 22.214 63.2471 21.514C63.2471 20.814 63.3964 20.1933 63.6951 19.652C63.9938 19.1013 64.3998 18.672 64.9131 18.364C65.4264 18.0467 66.0098 17.888 66.6631 17.888C67.1858 17.888 67.6431 17.986 68.0351 18.182C68.4271 18.378 68.7444 18.6533 68.9871 19.008V14.92H70.7791V25H69.1831L68.9871 24.006C68.7631 24.314 68.4644 24.5847 68.0911 24.818C67.7271 25.0513 67.2511 25.168 66.6631 25.168ZM67.0411 23.6C67.6198 23.6 68.0911 23.4087 68.4551 23.026C68.8284 22.634 69.0151 22.1347 69.0151 21.528C69.0151 20.9213 68.8284 20.4267 68.4551 20.044C68.0911 19.652 67.6198 19.456 67.0411 19.456C66.4718 19.456 66.0004 19.6473 65.6271 20.03C65.2538 20.4127 65.0671 20.9073 65.0671 21.514C65.0671 22.1207 65.2538 22.62 65.6271 23.012C66.0004 23.404 66.4718 23.6 67.0411 23.6ZM75.7018 25V19.554H74.7498V18.056H75.7018V17.244C75.7018 16.404 75.9118 15.8067 76.3318 15.452C76.7612 15.0973 77.3398 14.92 78.0678 14.92H78.8378V16.446H78.3478C78.0398 16.446 77.8205 16.5067 77.6898 16.628C77.5592 16.7493 77.4938 16.9547 77.4938 17.244V18.056H81.9738V25H80.1818V19.554H77.4938V25H75.7018ZM81.0918 17.062C80.7652 17.062 80.4945 16.964 80.2798 16.768C80.0745 16.572 79.9718 16.3247 79.9718 16.026C79.9718 15.7273 80.0745 15.4847 80.2798 15.298C80.4945 15.102 80.7652 15.004 81.0918 15.004C81.4185 15.004 81.6845 15.102 81.8898 15.298C82.1045 15.4847 82.2118 15.7273 82.2118 16.026C82.2118 16.3247 82.1045 16.572 81.8898 16.768C81.6845 16.964 81.4185 17.062 81.0918 17.062ZM83.5901 25V14.92H85.3821V25H83.5901ZM90.3071 25.168C89.6071 25.168 88.9865 25.0187 88.4451 24.72C87.9038 24.4213 87.4791 24.0013 87.1711 23.46C86.8631 22.9187 86.7091 22.2933 86.7091 21.584C86.7091 20.8653 86.8585 20.226 87.1571 19.666C87.4651 19.106 87.8851 18.672 88.4171 18.364C88.9585 18.0467 89.5931 17.888 90.3211 17.888C91.0025 17.888 91.6045 18.0373 92.1271 18.336C92.6498 18.6347 93.0558 19.0453 93.3451 19.568C93.6438 20.0813 93.7931 20.6553 93.7931 21.29C93.7931 21.3927 93.7885 21.5 93.7791 21.612C93.7791 21.724 93.7745 21.8407 93.7651 21.962H88.4871C88.5245 22.5033 88.7111 22.928 89.0471 23.236C89.3925 23.544 89.8078 23.698 90.2931 23.698C90.6571 23.698 90.9605 23.6187 91.2031 23.46C91.4551 23.292 91.6418 23.0773 91.7631 22.816H93.5831C93.4525 23.2547 93.2331 23.656 92.9251 24.02C92.6265 24.3747 92.2531 24.6547 91.8051 24.86C91.3665 25.0653 90.8671 25.168 90.3071 25.168ZM90.3211 19.344C89.8825 19.344 89.4951 19.47 89.1591 19.722C88.8231 19.9647 88.6085 20.338 88.5151 20.842H91.9731C91.9451 20.3847 91.7771 20.0207 91.4691 19.75C91.1611 19.4793 90.7785 19.344 90.3211 19.344Z" fill="#445EE2" />
                    <rect x="0.5" y="0.5" width="112" height="39" rx="4.5" stroke="#445EE2" />
                </svg>


                <svg className={styles.addFolder} onClick={handleAddFolder} width="139" height="38" viewBox="0 0 139 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 24.0605V18.0605" stroke="#445EE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M27 21.0605H33" stroke="#445EE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M40 26V16C40 15.4696 39.7893 14.9609 39.4142 14.5858C39.0391 14.2107 38.5304 14 38 14H31.236C30.8645 14 30.5004 13.8965 30.1844 13.7012C29.8684 13.5058 29.6131 13.2263 29.447 12.894L28.553 11.106C28.3869 10.7735 28.1314 10.4939 27.8152 10.2986C27.499 10.1032 27.1347 9.99983 26.763 10H22C21.4696 10 20.9609 10.2107 20.5858 10.5858C20.2107 10.9609 20 11.4696 20 12V26C20 26.5304 20.2107 27.0391 20.5858 27.4142C20.9609 27.7893 21.4696 28 22 28H38C38.5304 28 39.0391 27.7893 39.4142 27.4142C39.7893 27.0391 40 26.5304 40 26Z" stroke="#445EE2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M50.322 24L53.906 14.2H55.922L59.506 24H57.602L56.818 21.732H52.996L52.198 24H50.322ZM53.486 20.332H56.328L54.9 16.258L53.486 20.332ZM63.3103 24.168C62.6569 24.168 62.0736 24.0093 61.5603 23.692C61.0469 23.3747 60.6409 22.9407 60.3423 22.39C60.0436 21.8393 59.8943 21.214 59.8943 20.514C59.8943 19.814 60.0436 19.1933 60.3423 18.652C60.6409 18.1013 61.0469 17.672 61.5603 17.364C62.0736 17.0467 62.6569 16.888 63.3103 16.888C63.8329 16.888 64.2903 16.986 64.6823 17.182C65.0743 17.378 65.3916 17.6533 65.6343 18.008V13.92H67.4263V24H65.8303L65.6343 23.006C65.4103 23.314 65.1116 23.5847 64.7383 23.818C64.3743 24.0513 63.8983 24.168 63.3103 24.168ZM63.6883 22.6C64.2669 22.6 64.7383 22.4087 65.1023 22.026C65.4756 21.634 65.6623 21.1347 65.6623 20.528C65.6623 19.9213 65.4756 19.4267 65.1023 19.044C64.7383 18.652 64.2669 18.456 63.6883 18.456C63.1189 18.456 62.6476 18.6473 62.2743 19.03C61.9009 19.4127 61.7143 19.9073 61.7143 20.514C61.7143 21.1207 61.9009 21.62 62.2743 22.012C62.6476 22.404 63.1189 22.6 63.6883 22.6ZM72.1631 24.168C71.5098 24.168 70.9264 24.0093 70.4131 23.692C69.8998 23.3747 69.4938 22.9407 69.1951 22.39C68.8964 21.8393 68.7471 21.214 68.7471 20.514C68.7471 19.814 68.8964 19.1933 69.1951 18.652C69.4938 18.1013 69.8998 17.672 70.4131 17.364C70.9264 17.0467 71.5098 16.888 72.1631 16.888C72.6858 16.888 73.1431 16.986 73.5351 17.182C73.9271 17.378 74.2444 17.6533 74.4871 18.008V13.92H76.2791V24H74.6831L74.4871 23.006C74.2631 23.314 73.9644 23.5847 73.5911 23.818C73.2271 24.0513 72.7511 24.168 72.1631 24.168ZM72.5411 22.6C73.1198 22.6 73.5911 22.4087 73.9551 22.026C74.3284 21.634 74.5151 21.1347 74.5151 20.528C74.5151 19.9213 74.3284 19.4267 73.9551 19.044C73.5911 18.652 73.1198 18.456 72.5411 18.456C71.9718 18.456 71.5004 18.6473 71.1271 19.03C70.7538 19.4127 70.5671 19.9073 70.5671 20.514C70.5671 21.1207 70.7538 21.62 71.1271 22.012C71.5004 22.404 71.9718 22.6 72.5411 22.6ZM81.2018 24V18.554H80.2498V17.056H81.2018V16.244C81.2018 15.404 81.4118 14.8067 81.8318 14.452C82.2612 14.0973 82.8398 13.92 83.5678 13.92H84.3378V15.446H83.8478C83.5398 15.446 83.3205 15.5067 83.1898 15.628C83.0592 15.7493 82.9938 15.9547 82.9938 16.244V17.056H84.4918V18.554H82.9938V24H81.2018ZM88.6897 24.168C88.0177 24.168 87.411 24.014 86.8697 23.706C86.3377 23.398 85.913 22.9733 85.5957 22.432C85.2877 21.8813 85.1337 21.2467 85.1337 20.528C85.1337 19.8093 85.2923 19.1793 85.6097 18.638C85.927 18.0873 86.3517 17.658 86.8837 17.35C87.425 17.042 88.0317 16.888 88.7037 16.888C89.3663 16.888 89.9637 17.042 90.4957 17.35C91.037 17.658 91.4617 18.0873 91.7697 18.638C92.087 19.1793 92.2457 19.8093 92.2457 20.528C92.2457 21.2467 92.087 21.8813 91.7697 22.432C91.4617 22.9733 91.037 23.398 90.4957 23.706C89.9543 24.014 89.3523 24.168 88.6897 24.168ZM88.6897 22.614C89.1563 22.614 89.5623 22.4413 89.9077 22.096C90.253 21.7413 90.4257 21.2187 90.4257 20.528C90.4257 19.8373 90.253 19.3193 89.9077 18.974C89.5623 18.6193 89.161 18.442 88.7037 18.442C88.2277 18.442 87.817 18.6193 87.4717 18.974C87.1357 19.3193 86.9677 19.8373 86.9677 20.528C86.9677 21.2187 87.1357 21.7413 87.4717 22.096C87.817 22.4413 88.223 22.614 88.6897 22.614ZM93.5679 24V13.92H95.3599V24H93.5679ZM100.103 24.168C99.4496 24.168 98.8663 24.0093 98.3529 23.692C97.8396 23.3747 97.4336 22.9407 97.1349 22.39C96.8363 21.8393 96.6869 21.214 96.6869 20.514C96.6869 19.814 96.8363 19.1933 97.1349 18.652C97.4336 18.1013 97.8396 17.672 98.3529 17.364C98.8663 17.0467 99.4496 16.888 100.103 16.888C100.626 16.888 101.083 16.986 101.475 17.182C101.867 17.378 102.184 17.6533 102.427 18.008V13.92H104.219V24H102.623L102.427 23.006C102.203 23.314 101.904 23.5847 101.531 23.818C101.167 24.0513 100.691 24.168 100.103 24.168ZM100.481 22.6C101.06 22.6 101.531 22.4087 101.895 22.026C102.268 21.634 102.455 21.1347 102.455 20.528C102.455 19.9213 102.268 19.4267 101.895 19.044C101.531 18.652 101.06 18.456 100.481 18.456C99.9116 18.456 99.4403 18.6473 99.0669 19.03C98.6936 19.4127 98.5069 19.9073 98.5069 20.514C98.5069 21.1207 98.6936 21.62 99.0669 22.012C99.4403 22.404 99.9116 22.6 100.481 22.6ZM109.138 24.168C108.438 24.168 107.817 24.0187 107.276 23.72C106.734 23.4213 106.31 23.0013 106.002 22.46C105.694 21.9187 105.54 21.2933 105.54 20.584C105.54 19.8653 105.689 19.226 105.988 18.666C106.296 18.106 106.716 17.672 107.248 17.364C107.789 17.0467 108.424 16.888 109.152 16.888C109.833 16.888 110.435 17.0373 110.958 17.336C111.48 17.6347 111.886 18.0453 112.176 18.568C112.474 19.0813 112.624 19.6553 112.624 20.29C112.624 20.3927 112.619 20.5 112.61 20.612C112.61 20.724 112.605 20.8407 112.596 20.962H107.318C107.355 21.5033 107.542 21.928 107.878 22.236C108.223 22.544 108.638 22.698 109.124 22.698C109.488 22.698 109.791 22.6187 110.034 22.46C110.286 22.292 110.472 22.0773 110.594 21.816H112.414C112.283 22.2547 112.064 22.656 111.756 23.02C111.457 23.3747 111.084 23.6547 110.636 23.86C110.197 24.0653 109.698 24.168 109.138 24.168ZM109.152 18.344C108.713 18.344 108.326 18.47 107.99 18.722C107.654 18.9647 107.439 19.338 107.346 19.842H110.804C110.776 19.3847 110.608 19.0207 110.3 18.75C109.992 18.4793 109.609 18.344 109.152 18.344ZM113.851 24V17.056H115.447L115.615 18.358C115.867 17.91 116.208 17.5553 116.637 17.294C117.076 17.0233 117.589 16.888 118.177 16.888V18.778H117.673C117.281 18.778 116.931 18.8387 116.623 18.96C116.315 19.0813 116.072 19.2913 115.895 19.59C115.727 19.8887 115.643 20.304 115.643 20.836V24H113.851Z" fill="#445EE2" />
                    <rect x="0.5" y="0.5" width="138" height="37" rx="4.5" stroke="#445EE2" />
                </svg>

            </div>
            {folderErr ? <p className={styles.error}>Please select a folder first!!</p> : ""}

            {/* <svg className={styles.lockButton} onClick={handleClick} width="281" height="44" viewBox="0 0 281 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="281" height="44" rx="5" fill="#445EE2" />
                <path d="M100.853 21.3068H91.1473C90.3815 21.3068 89.7607 21.9275 89.7607 22.6933V27.5461C89.7607 28.3119 90.3815 28.9326 91.1473 28.9326H100.853C101.619 28.9326 102.239 28.3119 102.239 27.5461V22.6933C102.239 21.9275 101.619 21.3068 100.853 21.3068Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M92.5337 21.3067V18.5337C92.5337 17.6144 92.8989 16.7327 93.5489 16.0826C94.199 15.4326 95.0807 15.0674 96 15.0674C96.9193 15.0674 97.801 15.4326 98.451 16.0826C99.1011 16.7327 99.4663 17.6144 99.4663 18.5337V21.3067" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M121.327 27V15.8H123.375V25.4H128.335V27H121.327ZM133.22 27.192C132.452 27.192 131.759 27.016 131.14 26.664C130.532 26.312 130.047 25.8267 129.684 25.208C129.332 24.5787 129.156 23.8533 129.156 23.032C129.156 22.2107 129.338 21.4907 129.7 20.872C130.063 20.2427 130.548 19.752 131.156 19.4C131.775 19.048 132.468 18.872 133.236 18.872C133.994 18.872 134.676 19.048 135.284 19.4C135.903 19.752 136.388 20.2427 136.74 20.872C137.103 21.4907 137.284 22.2107 137.284 23.032C137.284 23.8533 137.103 24.5787 136.74 25.208C136.388 25.8267 135.903 26.312 135.284 26.664C134.666 27.016 133.978 27.192 133.22 27.192ZM133.22 25.416C133.754 25.416 134.218 25.2187 134.612 24.824C135.007 24.4187 135.204 23.8213 135.204 23.032C135.204 22.2427 135.007 21.6507 134.612 21.256C134.218 20.8507 133.759 20.648 133.236 20.648C132.692 20.648 132.223 20.8507 131.828 21.256C131.444 21.6507 131.252 22.2427 131.252 23.032C131.252 23.8213 131.444 24.4187 131.828 24.824C132.223 25.2187 132.687 25.416 133.22 25.416ZM142.684 27.192C141.873 27.192 141.158 27.016 140.54 26.664C139.921 26.312 139.43 25.8213 139.068 25.192C138.716 24.5627 138.54 23.8427 138.54 23.032C138.54 22.2213 138.716 21.5013 139.068 20.872C139.43 20.2427 139.921 19.752 140.54 19.4C141.158 19.048 141.873 18.872 142.684 18.872C143.697 18.872 144.55 19.1387 145.244 19.672C145.937 20.1947 146.38 20.92 146.572 21.848H144.412C144.305 21.464 144.092 21.1653 143.772 20.952C143.462 20.728 143.094 20.616 142.668 20.616C142.102 20.616 141.622 20.8293 141.228 21.256C140.833 21.6827 140.636 22.2747 140.636 23.032C140.636 23.7893 140.833 24.3813 141.228 24.808C141.622 25.2347 142.102 25.448 142.668 25.448C143.094 25.448 143.462 25.3413 143.772 25.128C144.092 24.9147 144.305 24.6107 144.412 24.216H146.572C146.38 25.112 145.937 25.832 145.244 26.376C144.55 26.92 143.697 27.192 142.684 27.192ZM148.069 27V15.48H150.117V22.28L152.933 19.064H155.365L152.117 22.68L155.893 27H153.333L150.117 23.016V27H148.069ZM160.336 27V19.064H162.144L162.304 20.408C162.549 19.9387 162.901 19.5653 163.36 19.288C163.829 19.0107 164.378 18.872 165.008 18.872C165.989 18.872 166.752 19.1813 167.296 19.8C167.84 20.4187 168.112 21.3253 168.112 22.52V27H166.064V22.712C166.064 22.0293 165.925 21.5067 165.648 21.144C165.37 20.7813 164.938 20.6 164.352 20.6C163.776 20.6 163.301 20.8027 162.928 21.208C162.565 21.6133 162.384 22.1787 162.384 22.904V27H160.336ZM173.558 27.192C172.79 27.192 172.097 27.016 171.478 26.664C170.87 26.312 170.385 25.8267 170.022 25.208C169.67 24.5787 169.494 23.8533 169.494 23.032C169.494 22.2107 169.675 21.4907 170.038 20.872C170.401 20.2427 170.886 19.752 171.494 19.4C172.113 19.048 172.806 18.872 173.574 18.872C174.331 18.872 175.014 19.048 175.622 19.4C176.241 19.752 176.726 20.2427 177.078 20.872C177.441 21.4907 177.622 22.2107 177.622 23.032C177.622 23.8533 177.441 24.5787 177.078 25.208C176.726 25.8267 176.241 26.312 175.622 26.664C175.003 27.016 174.315 27.192 173.558 27.192ZM173.558 25.416C174.091 25.416 174.555 25.2187 174.95 24.824C175.345 24.4187 175.542 23.8213 175.542 23.032C175.542 22.2427 175.345 21.6507 174.95 21.256C174.555 20.8507 174.097 20.648 173.574 20.648C173.03 20.648 172.561 20.8507 172.166 21.256C171.782 21.6507 171.59 22.2427 171.59 23.032C171.59 23.8213 171.782 24.4187 172.166 24.824C172.561 25.2187 173.025 25.416 173.558 25.416ZM180.404 27L178.084 19.064H180.116L181.492 24.776L183.092 19.064H185.364L186.964 24.776L188.356 19.064H190.388L188.052 27H185.924L184.228 21.064L182.532 27H180.404Z" fill="white" />
            </svg> */}
            {folderModal ? <AddFolder setFolderModal={setFolderModal} folderList={folderList} setFolderList={setFolderList} email={props.email} /> : ""}
            <FolderView folderList={folderList} setFolderList={setFolderList} setCurrFolder={props.setCurrFolder} currFolder={props.currFolder} setCurrFileName={props.setCurrFileName} email={props.email} />
            {addFileName ? <AddFileName setAddFileName={setAddFileName} setAddFileData={props.setAddFileData} setCurrFileName={props.setCurrFileName} addFileData={props.addFileData} email={props.email} /> : ""}
            {props.addFileData ? <AddFileData setAddFileData={props.setAddFileData} currFileName={props.currFileName} currFolderName={props.currFolder} fileData={props.fileData} setFileData={props.setFileData} setCurrFileList={props.setCurrFileList} email={props.email} /> : ""}

        </div>
    );
}