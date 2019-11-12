const { BrowserWindow, app } = require('electron')
const { cp } = require('child_process')

const term = cp.exec('echo OK', (err, stdout, stderr)=>{
    if(err){
        return err
    }
    else {
        return stdout
    }
})

function term() {

    try{
            document.getElementById('um').innerHTML = 'NOK'
    }
    catch (err) {
        document.getElementById('um').innerHTML = err
    }
}



function alerta() {

    document.getElementById("um").innerHTML = "OK";

}