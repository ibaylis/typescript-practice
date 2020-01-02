"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, state, age, city) {
        this.name = name;
        this.state = state;
        this.age = age;
        this.city = city;
        this.name = name == undefined ? "(Missing Name)" : name;
        this.state = state == undefined ? "(Missing State)" : state;
        this.age = age == undefined ? 0 : age;
        this.city = city == undefined ? "(Missing City)" : city;
        //console.log(`Just created a new User named ${this.name}`);
        this.welcome();
    }
    welcome() {
        console.log(`Welcome ${this.name} you are from ${this.city}, ${this.state} and you are ${this.age} years old`);
    }
    signedOff() {
        console.log(`${this.name} who is ${this.age} years old from ${this.city}, ${this.state} just signed out`);
    }
    set Age(value) {
        this.age = value;
    }
    get Age() {
        return this.age;
    }
}
exports.User = User;
