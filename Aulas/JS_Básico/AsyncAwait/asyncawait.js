const { rejects } = require("assert");
const { type } = require("os");

function sum(x){
    return new Promise((resolve, reject) => {
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject("Tá de brincadeira?");
        }
        setTimeout(() => {
            resolve(x + 5000);
        }, 3000);
    })   
}

async function main(){
    try{
        const resultado = await sum('#');
        console.log(`Resultado com async await: ${resultado}`);
    }catch(error){
        console.log(`Temos problemas: ${error}`);
        console.log(process.env.USERNAME); 
    }
}

main();