"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line: max-line-length
const Manager_1 = require("./classes/Manager");
const Worker_1 = require("./classes/Worker");
let Billy = new Manager_1.Manager("Billy Smith", "CT", 23, "New Haven");
let Johnny = new Worker_1.Worker("Johnny Polasky", "CT", 45, "New Haven");
Billy.giveOrders();
Johnny.doesTask();
Billy.sayWelcome();
let Cindy = new Manager_1.Manager("Cindy Smith", "CA", 22, "LA");
