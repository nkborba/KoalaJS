const { BrowserWindow, app } = require ('electron')

function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height:600,

        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
}

app.on('ready', createWindow)
