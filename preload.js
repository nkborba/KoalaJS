const path = require('path')
const customTitlebar = require('custom-electron-titlebar');
const { remote } = require('electron')
const { Menu, MenuItem } = remote
const url = require('url') 

// const iconUrl = url.format({
//     pathname: path.join(__dirname, 'src/images/koalaicon_15.png'),
//     protocol: 'file:',
//     slashes: true
// })

const tibleBar = new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#2c3e50'),
    icon: "/koalaicon_15.png"
});

// console.log(path.resolve(__dirname, "src", "images", "koalaicon_15.png"))

const menu = new Menu()

menu.append(new MenuItem({
    label: 'Authors',
    submenu: [
        {
            label: 'Denis',
            click: () => console.log('Teste')
        },
        {
            label: 'Lucas',
            click: () => console.log('Teste')
        },
        {
            label: 'Nicholas',
            click: () => console.log('Teste')
        }
    ]
}))


tibleBar.updateMenu(menu)
tibleBar.updateIcon('koalaicon_15.png')
