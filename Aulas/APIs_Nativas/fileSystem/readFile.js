const fs = require('fs');

//Primeiro jeito (forma não bloqueante)
// fs.readFile('texto.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })

//Segundo jeito (forma bloqueante)
const texto = fs.readFileSync("texto.txt");
console.log(texto.toString());