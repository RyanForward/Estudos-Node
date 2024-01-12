const {EventEmitter} = require('events');
const emitter = new EventEmitter();

const validaObjeto = (a)=>{
    if(typeof a !== 'object'){
        emitter.emit('error', new Error('Tipo inválido!'));
    }
    console.log("Válido!")
}

emitter.addListener('error', (err)=>{
    console.log("Evento: " + err.message);
})


let dados = {name: "Ryan", course: 'Nodejs'}
validaObjeto('1322');