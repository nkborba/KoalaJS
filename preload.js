const path = require('path')
const customTitlebar = require('custom-electron-titlebar');
const { remote } = require('electron')
const { Menu, MenuItem } = remote

const tibleBar = new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#2c3e50'),
    icon: path.join(__dirname, "src/images/koalaicon_15.png")
});

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