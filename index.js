const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const ipc = ipcMain



if(process.env.NODE_ENV !== 'production'){
  require('electron-reload')(__dirname,{})
}

let mainWindow

function createWindow () {
  const win = new BrowserWindow({
    width:1000,
    height: 600,
    minWidth: 600,
    minHeight: 200,
    frame: false,
    webPreferences:{
      nodeIntegration:true,
      contextIsolation:false,
      devTools:true,
      preload: path.join(__dirname,'preload.js')
    }
  })
  win.loadFile('src/index.html')
  win.setBackgroundColor('#343B48')

  ipc.on('closeApp', ()=>{
    console.log('se cerro')
    win.close()
  })
  ipc.on('maxApp', ()=>{
    if(win.isMaximized()){
      win.restore()
    }else{
      win.maximize()
    }
  })
  ipc.on('minimizeApp', ()=>{
   
    win.minimize()
  })
  ipc.on('ajustesApp', ()=>{
  
  const subWin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  subWin.setSize(800, 600);
  subWin.setPosition(0, 0);

  subWin.loadFile('src/miniIndex.html');
  subWin.show();
      
      
  });
  win.maximize()
  }

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
