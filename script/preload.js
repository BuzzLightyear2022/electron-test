const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('myAPI', {
    doAThing: () => {
        console.log("Hello!");
    }
});