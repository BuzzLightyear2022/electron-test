'use strict'

const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const { fork } = require('child_process');
const mySql = require('mysql');

const sqlProcess = fork("./script/sqlProcess.js");

class controlApp {
    static mainWindow;
    static createWindow = () => {
        controlApp.mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js')
            }
        });
        ipcMain.on('send-message', (event, message) => {
            sqlProcess.send(message);
        });
        controlApp.mainWindow.loadFile('index.html');
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        });
        app.on('activate', () => {
            if (controlApp.mainWindow === null) {
                createWindow();
            }
        });
    }
}

app.on('ready', 
    controlApp.createWindow
);