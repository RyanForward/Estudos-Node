"use strict";
//string, boolean, number...
let x = 10;
x = 80;
console.log(x);
// inferencia x annotation
let y = 12; //inferencia
let z = 12; //annotation
// tipos básicos
let firstName = "Ryan";
let age = 20;
const isAdmin = true;
// String != string (sempre com letra minúscula)
firstName = "João"; //podemos sobrescrever normalmente (TS não inflinge regras do JS, apenas adiciona funcionalidades)
// declaração de Object
const myNumbers = [1, 2, 3];
// tuplas
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
// myTuple = [false, 10, "halo"] gera erros
// object literals -> {prop: value}
const user = {
    name: "Pedro",
    age: 12
};
console.log(user);
console.log(user.name);
// any: tipo que aceita qualquer tipo
let a = 0;
a = "teste";
a = false;
a = [];
// union type: forma de unir tipos para criar um tipo mais complexo
let id = "10";
id = 200;
const userId = 10;
const prodId = "alskdnqowenma";
// const shirId: myIdType = false !vai dar erro!
// enum: enumera uma coleção
// tamanho de roupas (size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["p"] = "Pequeno";
    Size["m"] = "M\u00E9dio";
    Size["g"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.g
};
console.log(camisa);
