
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

// literal types
let autenticado: "authOK" | null;

autenticado = 'authOK';
autenticado = null;

// funçoes

function sum(a: number, b: number){
    return a + b;
}
console.log(sum(12, 12));
// console.log(sum(false, "12")); não pode

function sayHelloto(name: string): string{
    return `Hello ${name}`;
}

console.log(sayHelloto("Ryan"));

// funções que não retornam nada
function logger(msg: string): void{
    console.log(msg);
}

logger("teste");

function greeting(name: string, greet?: string): void{
    if(greet){
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
    
}

console.log(greeting("Ryan"));
console.log(greeting("Pedro", "Sr"));

// interfaces

interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}

function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 6
}

console.log(sumNumbers({n1: 1, n2: 2}));
console.log(multiplyNumbers({n1: 10, n2: 2}));
console.log(multiplyNumbers(someNumbers));

// Narrowing: checagem de tipos

function doSomething(info: number | boolean){
    if(typeof info === 'number'){
        console.log(`O número é ${info}`);
        return;
    }
    console.log(`Não foi passado um número, foi passado um valor do tipo: ${typeof(info)}`);
}

doSomething(5);
doSomething(true);

// generics

function showArrayItems<T>(arr: T[]) {
    arr.forEach((item)=>{
        console.log(`Item: ${item}`)
    })
}

const a1: number[] = [1, 2, 3];
const a2: string[] = ["a", "b", "c"]

showArrayItems(a1);
showArrayItems(a2);


//classes

class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isAproved: boolean){
        this.name = name;
        this.role = role;
        this.isApproved = isAproved
    }

    showUserName(){
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canShow: boolean){
        if(canShow){
            console.log(`A role do usuário é: ${this.role}`)
            return;
        }
        console.log("Informação restrita");
    }
}

const zeca = new User("Zéca", "Admin", true);
console.log(zeca.showUserName())
console.log(zeca.showUserRole(false))
console.log(zeca.showUserRole(true))

//interfaces em classes

interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle{

    brand
    wheels

    constructor(brand: string, wheels: number){
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);
    }

    showWheels(): void{
        console.log(`A quantidade de rodas do carro é: ${this.wheels}`);
    }
}

const fusca = new Car("VW", 4);
fusca.showBrand()

// herança

class SuperCar extends Car{
    engine

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels)
        this.engine = engine
    }

    showEngine(): void{
        console.log(`O motor do carro é: ${this.engine}`);
    }
}

const a4 = new SuperCar("Audi", 4, 2.0);

a4.showBrand();
a4.showWheels();
a4.showEngine();

// Decorators

function BaseParamters() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}

@BaseParamters()

class Person{
    name

    constructor(name: string){
        this.name = name
    }

}

const sam = new Person("Sam");

console.log(sam);





