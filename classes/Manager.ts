import { User } from "./User";

export class Manager extends User {
    constructor(name, state, age, city) {
        super(name, state, age, city);
    }
    giveOrders() {
        console.log(`${this.name} Gives orders to employees`);
    }
    sayWelcome(){
        this.welcome();
    }
}