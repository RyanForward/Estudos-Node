"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
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
// literal types
let autenticado;
autenticado = 'authOK';
autenticado = null;
// funçoes
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
// console.log(sum(false, "12")); não pode
function sayHelloto(name) {
    return `Hello ${name}`;
}
console.log(sayHelloto("Ryan"));
// funções que não retornam nada
function logger(msg) {
    console.log(msg);
}
logger("teste");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
console.log(greeting("Ryan"));
console.log(greeting("Pedro", "Sr"));
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 6
};
console.log(sumNumbers({ n1: 1, n2: 2 }));
console.log(multiplyNumbers({ n1: 10, n2: 2 }));
console.log(multiplyNumbers(someNumbers));
// Narrowing: checagem de tipos
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`O número é ${info}`);
        return;
    }
    console.log(`Não foi passado um número, foi passado um valor do tipo: ${typeof (info)}`);
}
doSomething(5);
doSomething(true);
// generics
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrayItems(a1);
showArrayItems(a2);
//classes
class User {
    constructor(name, role, isAproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isAproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`A role do usuário é: ${this.role}`);
            return;
        }
        console.log("Informação restrita");
    }
}
const zeca = new User("Zéca", "Admin", true);
console.log(zeca.showUserName());
console.log(zeca.showUserRole(false));
console.log(zeca.showUserRole(true));
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
    showWheels() {
        console.log(`A quantidade de rodas do carro é: ${this.wheels}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
// herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
    showEngine() {
        console.log(`O motor do carro é: ${this.engine}`);
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
a4.showBrand();
a4.showWheels();
a4.showEngine();
// Decorators
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = (() => {
    let _classDecorators = [BaseParamters()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Person = _classThis = class {
        constructor(name) {
            this.name = name;
        }
    };
    __setFunctionName(_classThis, "Person");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Person = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Person = _classThis;
})();
const sam = new Person("Sam");
console.log(sam);
