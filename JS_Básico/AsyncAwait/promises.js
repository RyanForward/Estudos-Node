function soma(x){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + 5000);
        }, 3000);
    })   
}

soma(280)
.then((resultados) => {
    console.log(resultados)
})
.catch((reject) =>{
    console.log("Houve um problema: ", reject);
})