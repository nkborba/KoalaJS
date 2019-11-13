
function term() {
    var exec = require('child_process')
    var result = exec.execSync('echo OK').toString()
    return result
}

var x = term()
console.log(x)