const EventEmitter = require('events');

class Evento extends EventEmitter {}
const meuEvento = new Evento();

const y = 20;

//cliente 1(assinante): chega na banca de jornal: "se chegar revista veja, eu gostaria de comprar uma"
meuEvento.on('Veja', (x, y) => {
    console.log(`Sou o assinante numero 1!! `);
});

//cliente 2(assinante): chega na banca de jornal: "se chegar revista veja, eu gostaria de comprar uma"
meuEvento.on('Veja', (x, y) => {
    console.log(`Sou o assinante numero 2!! `);
});

//dono da banca (emissor): Tenho revistas Veja, alguém quer?
meuEvento.emit('Veja', process.env.USERNAME, 'Chegou revista veja, venha comprar!');