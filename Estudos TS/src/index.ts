
//string, boolean, number...
let x:number = 10;
x = 80;
console.log(x);

// inferencia x annotation

let  y = 12   //inferencia
let z: number = 12 //annotation

// tipos básicos

let firstName: string = "Ryan"
let age: number = 20
const isAdmin: boolean = true

// String != string (sempre com letra minúscula)

firstName = "João"; //podemos sobrescrever normalmente (TS não inflinge regras do JS, apenas adiciona funcionalidades)

// declaração de Object
const myNumbers: number[] = [1, 2, 3]

// tuplas
let myTuple: [number, string, string[]]
myTuple = [5, "teste", ["a", "b"]]
// myTuple = [false, 10, "halo"] gera erros

// object literals -> {prop: value}

const user: {name: string, age: number} = {
    name: "Pedro",
    age: 12 
};

console.log(user);
console.log(user.name);

// any: tipo que aceita qualquer tipo

let a: any = 0
a = "teste"
a = false
a = []

// union type: forma de unir tipos para criar um tipo mais complexo
let id: string | number = "10"
id = 200

// id = !false vai dar erro!

//type alias: determinar o nome de um tipo. Por exemplo: (string | number) pode virar um tipo específico do seu código
type myIdType = number | string;
const userId: myIdType = 10 
const prodId: myIdType = "alskdnqowenma"
// const shirId: myIdType = false !vai dar erro!

// enum: enumera uma coleção
// tamanho de roupas (size: Médio, size: Pequeno)

enum Size{
    p = "Pequeno",
    m = "Médio",
    g = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.g
}

console.log(camisa);

