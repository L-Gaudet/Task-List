// main.js

// Modules to control application life and create native browser window
// const { app, BrowserWindow } = require('electron')
import { app, BrowserWindow } from 'electron';
// import { path } from 'path';
// import { dirname } from 'path';
// const path = require('path')

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 580,
    height: 700,
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: __dirname + '/preload.js'
    }
  })

  // mainWindow.setBackgroundColor('#DAD7CD')

  // and load the index.html of the app.
  mainWindow.loadFile('dist/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// create tray icon
// const {Tray, Menu, MenuItem, nativeImage } = require('electron');

import { Tray, Menu } from 'electron';

let tray

app.whenReady().then(() => { 
  // const icon = nativeImage.createFromPath('/my-app/src/media/list.clipboard.fill@2x.png')
  // const icon = nativeImage.createFromPath(path.join(__dirname,'media','listclipboardfill@2x.png'))
  tray = new Tray('icon') 
  // tray = new Tray(require('path').resolve(__statics, 'list.clipboard.fill@2x.png'))  
  let contextMenu = Menu.buildFromTemplate([{label: 'No tasks', role: 'unhide'}])
  tray.setContextMenu(contextMenu)   
})