const Buffer = require('buffer').Buffer
const buf = Buffer.from('Olá, Mundo!');

console.log(buf.toString());
console.log(buf.toString('utf-16le'));

const buf_string = Buffer.from('Carregando uma string', 'utf-8')

console.log(Buffer.isBuffer(buf_string ))
console.log(buf_string.toString('utf-8', 0, 10));


// console.clear()