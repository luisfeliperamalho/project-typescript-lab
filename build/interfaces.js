"use strict";
const bot1 = {
    id: 1,
    name: 'optimus prime'
};
const bot2 = {
    id: 1,
    name: 'optimus prime',
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, 'Luis');
console.log(p.sayHello());
