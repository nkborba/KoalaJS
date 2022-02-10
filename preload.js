const path = require('path')
const customTitlebar = require('custom-electron-titlebar');
const { remote, shell } = require('electron')
const { Menu, MenuItem } = remote

const iconPath = "src/images/koalaicon_15.png";

const tibleBar = new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#2c3e50'),
    icon: iconPath,
});

const menu = new Menu()

menu.append(new MenuItem({
    label: 'Authors',
    submenu: [
        {
            label: 'Denis',
            click: () => shell.openExternal('https://github.com/denisvba')
        },
        {
            label: 'Lucas',
            click: () => shell.openExternal('https://github.com/lucashtrinquinato')
        },
        {
            label: 'Nicholas',
            click: () => shell.openExternal("https://www.github.com/nkborba")
        }
    ]
}))


tibleBar.updateMenu(menu)
tibleBar.updateIcon("src/images/koalaicon_15.png")
tibleBar.updateTitle("KOALA - You're Koalified")
