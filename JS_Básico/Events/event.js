const EventEmitter = require('events');

class Evento extends EventEmitter {}
const meuEvento = new Evento();

const y = 25;

meuEvento.on('seguranca', (x, y) => {
    console.log(`Executando o evento 'seguranca: ${x} ${y}`);
});

meuEvento.on('login', (x, y) => {
    console.log(`Executando o evento 'login: ${x} ${y}`);
});

if (y == 20){
    meuEvento.emit('seguranca', process.env.USERNAME, 'Alterou salário');
}else{
    meuEvento.emit('login', process.env.USERNAME, 'Efetuou login');
}