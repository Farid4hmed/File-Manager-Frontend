import axios from "axios";


export async function setPin(pin){
    const reqUrl = `https://file-manager-seg7.onrender.com/api/auth/setPin/${pin}`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
}


export async function verifyPin(pin){
    const reqUrl = `https://file-manager-seg7.onrender.com/api/auth/verifyPin/${pin}`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
}

export async function checkStatus(){
    const reqUrl = `https://file-manager-seg7.onrender.com/api/auth/status/`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
};

export async function addNewFolder(foldername){
    const reqUrl = `https://file-manager-seg7.onrender.com/api/discover/folder/create/${foldername}`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
};

export async function getFolders(){
    const reqUrl = `https://file-manager-seg7.onrender.com/api/discover/getFolders`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
};

export async function addNewFile(fileName, folderName, fileData){
    const reqUrl = `https://file-manager-seg7.onrender.com/api/discover/file/create?fileName=${fileName}&folderName=${folderName}&fileData=${fileData}`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
};

export async function getFiles(folderName){
    const reqUrl = `https://file-manager-seg7.onrender.com/api/discover/getFiles/${folderName}`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
};

export async function getAllFiles(){
    const reqUrl = `https://file-manager-seg7.onrender.com/api/discover/getFiles`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
}