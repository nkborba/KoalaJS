const { BrowserWindow, app, Tray } = require ('electron')

// new customTitlebar.Titlebar({
//     backgroundColor: customTitlebar.Color.fromHex('#03a9f4')
// });

// MyTitleBar.updateTitle('KOALA - You\'re KOALified ');

function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height:600,
        resizable:false,
        frame: false,
        icon: __dirname+"/src/images/koalaicon_15.png",

        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
}

app.on('ready', createWindow)

