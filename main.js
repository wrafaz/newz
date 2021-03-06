const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep global to disable be removed by garbage collection
let mainWindow

function createWindow()
{
    mainWindow = new BrowserWindow({
        width: 1200, 
        height:800,
        frame: true,
        titleBarStyle: "hidden"
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    //mainWindow.setFullScreen(true);
    mainWindow.maximize(true);

    //mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function(){
        mainWindow = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function(){
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function(){
    if (mainWindow === null){
        createWindow();
    }
});
