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

export async function addNewFolder(foldername, email){
    const reqUrl = `https://file-manager-seg7.onrender.com/api/discover/folder/create/${foldername}/${email}`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
};

export async function getFolders(email){
    const reqUrl = `https://file-manager-seg7.onrender.com/api/discover/getFolders?email=${email}`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
};

export async function addNewFile(fileName, folderName, fileData, email){
    const reqUrl = `https://file-manager-seg7.onrender.com/api/discover/file/create?fileName=${fileName}&folderName=${folderName}&fileData=${fileData}&email=${email}`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
};

export async function getFiles(folderName, email){
    const reqUrl = `https://file-manager-seg7.onrender.com/api/discover/getFiles/${folderName}/${email}`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
};

export async function getAllFiles(email){
    const reqUrl = `https://file-manager-seg7.onrender.com/api/discover/getFiles?email=${email}`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data;
}