const {promisify} = require('util');

const writeFile = promisify(require('fs').writeFile);
const conteudo = "Criando um arquivo utilizando promisify do modulo nativo util";

writeFile('utilArquivo.txt', conteudo)
.then(()=>{
    console.log("Deu tudo certo");
})
.catch((err) => {
    console.log("Erro: ", err);
})