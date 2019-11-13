function term() {
    var cmd = require('child_process')
    var result = cmd.execSync('adb devices').toString()
    console.log(result)

    try{
            document.getElementById('um').innerHTML = result
    }
    catch (err) {
        document.getElementById('um').innerHTML = err
    }
}

function alerta() {
    console.log('AAA')
    document.getElementById("um").innerHTML = "OK";

}