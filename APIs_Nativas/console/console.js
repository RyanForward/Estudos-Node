console.log('Exibindo uma mensagem num console');

// erro

console.error(new Error('Exibindo mensagem de erro!')) //exibe a mensagem e para o processamento


//mostra em formato de tabela

const carros = ['GM', 'FIAT', 'FORD', 'VW', 'RENAULT', 'HONDA', 'HYUNDAI'];
console.table(carros);

const dados = [{name: "Ryan", empresa: "b2ml"}, {name: "Pedro", empresa: "mobal"}];
console.table(dados)


// faz um contador de iterações baseado em uma flag inserida entre os ( )
const aux = 5
for(let x = 0; x < aux; x++){
    console.count(x);
    console.count(x);
}
console.count('processo');
console.log("Resetando o processo");
console.countReset('processo');
console.count('processo');

//Cronômetro

let aux1 = 100
console.time('contador');
for(let x = 0; x < aux; x++){
    console.count(x);
    console.count(x);
}
console.timeEnd('contador');

// Verifica se uma condição está dando certo, faz um teste

console.assert(true, "Faça alguma coisa");
console.assert(false, "Deu ruim aqui");

//limpa todos os dados do console

// console.clear()


