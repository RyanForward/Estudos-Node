function soma(x, callback){
    setTimeout(() => {
        return callback(null, x + 5000);
    }, 3000);
        
}

//calback function
function resolveSoma(err, resultados){
    if(err) throw err;
    console.log(resultados);
}

soma(200, resolveSoma)