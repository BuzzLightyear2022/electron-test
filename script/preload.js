'use strict'

const { contextBridge } = require('electron');
const { ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
    doAThing: () => {
        console.log("Hello!");
    },
    
});