const { BrowserWindow, app } = require ('electron')
const exec = require("child_process").exec;

function term() {
    exec('ls', function (err, stdout, stderr){
        console.log(stdout)
    })
}

function alerta () {
    alert("Alert working!")
}