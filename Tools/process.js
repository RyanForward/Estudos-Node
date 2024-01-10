require('./subdirectory/sub')
console.log('------------------------------------------')
console.log(`Nome do arquivo: `, __filename);
console.log(`Diretório do arquivo: `, __dirname);
// console.log(`Parâmetros de execução: `, process.argv);
console.log(`Diretório em que foi invocado: `, process.cwd());
console.log(`Sistema operacional: `, process.env.OS);
console.log(`Nome do user: `, process.env.USERNAME);
console.log(`Lingua: `, process.env.LANG);
console.log(`Nome do computador: `, process.env.COMPUTERNAME);

switch(process.argv[2]){
    case '-a':
        console.log("Execute rotina principal");
        break;
    case '-i':
        console.log("Execute instalação");
        break;
    default: 
        console.log('Arg inválido');
}

console.log(`Ambiente do Servidor: `, process.platform); 