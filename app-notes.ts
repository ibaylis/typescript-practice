// tslint:disable-next-line: max-line-length

import { User } from "./classes/User";
import { Manager } from "./classes/Manager";
import { Worker} from "./classes/Worker";






let Billy = new Manager("Billy Smith", "CT", 23, "New Haven");
let Johnny = new Worker("Johnny Polasky", "CT", 45, "New Haven");
Billy.giveOrders();
Johnny.doesTask();
Billy.sayWelcome();


export {}; 
// place this in the file so that when you run it tsc app.ts you dont get an error of calling the variable twice. tsc app.ts creates a compiled js file of app.ts; 
//console.log(Billy.Age);
// let user1 = new User();
// user1.Age = 32;
// user1.city = "Philly";
// user1.name = "Billy";
// user1.state = "PA";

// let user2 = new User("Jane", "CA", 23, "LA");

// console.log(user1.Age);


// class User {
//     // name: string = "(Missing Name)";
//     // state: string = "(Missing State)";
//     // age: number = 0;
//     // city: string = "(Missing City)";

//     // private name: string;
//     // private state: string;
//     // private age: number;
//     // private city: string;

//     constructor(
//             public name?: string, 
//             public state?: string, 
//             private age?: number, 
//             public city?: string 
//         ) {
//             this.name = name == undefined ? "(Missing Name)" : name;
//             this.state = state == undefined ? "(Missing State)" : state;
//             this.age = age == undefined ? 0 : age;
//             this.city = city == undefined ? "(Missing City)" : city;
//             //console.log(`Just created a new User named ${this.name}`);
//             this.welcome();
//     }

//     private welcome() {
//         console.log(
//             `Welcome ${this.name} you are from ${this.city}, ${this.state} and you are ${this.age} years old`
//         );
//     }

//     signedOff() {
//         console.log(
//             `${this.name} who is ${this.age} years old from ${this.city}, ${this.state} just signed out`
//         );
//     }

//     set Age(value: number) {
//         this.age = value;
//     }

//     get Age() {
//         return this.age;
//     }

//     // printState() {
//     //     console.log(`${this.state}`);
//     // }
//     // printRegInfo() {
//     //     console.log(`${this.name}`, `${this.age}`, `${this.city}`, `${this.state}`);
//     // }
//     // printName() {
//     //     console.log(`${this.name} ${this.doubleAge()}`);
//     // }
//     // doubleAge() {
//     //     return this.age * 2;
//     // }
// }

// let user1 = new User();
// user1.Age = 32;
// user1.city = "Philly";
// user1.name = "Billy";
// user1.state = "PA";

// let user2 = new User("Jane", "CA", 23, "LA");

// console.log(user1.Age);
// let user2 = new User("Billy",   "PA", 22, "Philly");
// let user3 = new User("Cindy",   "PA", 42, "Philly");
// let user4 = new User("Raul",    "PA", 62, "Philly");


// user4.welcome();
// user4.signedOff();
// console.log(user2.city);
// user3.printState();
// user4.printRegInfo();












// Interfaces
// let user = {
//     name: "Ian",
//     state: "PA",
//     age: 35,
//     city: "Philly"
// };

// // interfaces are like templates on how you should recieve the data
// interface UserData {
//     name: string;
//     state: string;
//     age: number;
//     city: string;
// }

// let welcome = (user: UserData) => {
//     console.log(
//         `Welcome ${user.name} you are from ${user.city}, ${user.state}, and you are ${user.age}`
//     );
// };

// let signedOff = (user: UserData) => {
//     console.log(
//         `${user.name} who is ${user.age} years old from ${user.city}, ${user.state} just signed off`
//     );
// };

// welcome(user);
// signedOff(user);

// ran tsc --target ES2016 app.ts && node app.js to run the es6 js
// let test = async function() {
//     console.log("testing");
// }

// function print(name) {
//     console.log(name);
// }

// print("Ian");

// let print2 = (name) => {
//     console.log(name);
// }

// print2("Ivan");

// let print3 = (name, age, location) => {
//     console.log(name, age, location);
// }

// print3("Tasha", 35, "Pa");

// let print4 = name => console.log(name);

// print4("Mona");

// let double = number => number * 2;
// console.log(double(7));

// let game: string;
// game = "Basketball";
// game = "Tennis";
// function print(game: string, points: number){
//     console.log(`Ian got ${points} points in his last ${game} game`);
// }
// print("Football", 23);
// let a: number = 1;
// let b: string = "string";
// let c: boolean = true;
// let d: null = null;
// let e: object = {};
// let f: undefined = undefined;
// let g: void = null;
// let h: any = "j";
// let i: any[] = ["billy", 23];
// let j: Array<string> = ["23", "Ian"];
// let k: Array<number> = [24, 44];


// const username = "Ian";
// //username = "Billy";

// let game = "Basketball";
// game = "wrestling";