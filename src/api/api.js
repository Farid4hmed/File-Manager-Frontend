import axios from "axios";

export async function setPin(pin) {
    try {
        const reqUrl = `https://file-manager-seg7.onrender.com/api/auth/setPin`;
        const result = await axios.post(reqUrl, { pin });
        if (result.data) return result.data;
    } catch (error) {
        console.error("Error setting pin:", error);
        throw error;
    }
}

export async function verifyPin(pin) {
    try {
        const reqUrl = `https://file-manager-seg7.onrender.com/api/auth/verifyPin`;
        const result = await axios.post(reqUrl, { pin });
        if (result.data) return result.data;
    } catch (error) {
        console.error("Error verifying pin:", error);
        throw error;
    }
}

export async function checkStatus() {
    try {
        const reqUrl = `https://file-manager-seg7.onrender.com/api/auth/status`;
        const result = await axios.get(reqUrl);
        if (result.data) return result.data;
    } catch (error) {
        console.error("Error checking status:", error);
        throw error;
    }
}

export async function addNewFolder(foldername, email) {
    try {
        const reqUrl = `https://file-manager-seg7.onrender.com/api/discover/folder/create`;
        const result = await axios.post(reqUrl, { foldername, email });
        if (result.data) return result.data;
    } catch (error) {
        console.error("Error adding new folder:", error);
        throw error;
    }
}

export async function getFolders(email) {
    try {
        const reqUrl = `https://file-manager-seg7.onrender.com/api/discover/folders/${email}`;
        const result = await axios.get(reqUrl);
        if (result.data) return result.data;
    } catch (error) {
        console.error("Error getting folders:", error);
        throw error;
    }
}

export async function addNewFile(fileName, folderName, fileData, email) {
    try {
        const reqUrl = `https://file-manager-seg7.onrender.com/api/discover/file/create`;
        const result = await axios.post(reqUrl, { fileName, folderName, fileData, email });
        if (result.data) return result.data;
    } catch (error) {
        console.error("Error adding new file:", error);
        throw error;
    }
}

export async function getFiles(folderName, email) {
    try {
        const reqUrl = `https://file-manager-seg7.onrender.com/api/discover/files/${folderName}/${email}`;
        const result = await axios.get(reqUrl);
        if (result.data) return result.data;
    } catch (error) {
        console.error("Error getting files:", error);
        throw error;
    }
}

export async function getAllFiles(email) {
    try {
        const reqUrl = `https://file-manager-seg7.onrender.com/api/discover/files?email=${email}`;
        const result = await axios.get(reqUrl);
        if (result.data) return result.data;
    } catch (error) {
        console.error("Error getting all files:", error);
        throw error;
    }
}
