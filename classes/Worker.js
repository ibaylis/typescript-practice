"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
class Worker extends User_1.User {
    constructor(name, state, age, city) {
        super(name, state, age, city);
    }
    doesTask() {
        console.log(`${this.name} Worker does their job`);
    }
}
exports.Worker = Worker;
