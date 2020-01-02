import { User } from "./User";

export class Worker extends User {
    constructor(name, state, age, city) {
        super(name, state, age, city);
    }
    doesTask() {
        console.log(`${this.name} Worker does their job`);
    }
}