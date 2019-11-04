var exec =  require('child_process').exec

exec('echo OK', function(err, stdout, stderr){
    return stdout.toString()
})

function getCmd(){
    try{
return exec
    }
    catch (err) {
        return err
    }
    
}