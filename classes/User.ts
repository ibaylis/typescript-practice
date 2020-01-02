interface UserInterface {
    name?: string;
    state?: string;
    city?: string;
    signedOff();
}

export class User implements UserInterface {
    constructor(
            public name?: string, 
            public state?: string, 
            private age?: number, 
            public city?: string 
        ) {
            this.name = name == undefined ? "(Missing Name)" : name;
            this.state = state == undefined ? "(Missing State)" : state;
            this.age = age == undefined ? 0 : age;
            this.city = city == undefined ? "(Missing City)" : city;
            //console.log(`Just created a new User named ${this.name}`);
            this.welcome();
    }

    protected welcome() {
        console.log(
            `Welcome ${this.name} you are from ${this.city}, ${this.state} and you are ${this.age} years old`
        );
    }

    signedOff() {
        console.log(
            `${this.name} who is ${this.age} years old from ${this.city}, ${this.state} just signed out`
        );
    }

    set Age(value: number) {
        this.age = value;
    }

    get Age() {
        return this.age;
    }

}