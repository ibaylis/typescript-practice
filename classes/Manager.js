"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
class Manager extends User_1.User {
    constructor(name, state, age, city) {
        super(name, state, age, city);
    }
    giveOrders() {
        console.log(`${this.name} Gives orders to employees`);
    }
    sayWelcome() {
        this.welcome();
    }
}
exports.Manager = Manager;
