'use strict'

const { app, BrowserWindow} = require('electron');
const { Sequelize } = require('sequelize');
const path = require('path');

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

app.on('ready', controlApp.createWindow);