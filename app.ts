// tslint:disable-next-line: max-line-length
import { Manager } from "./classes/Manager";
import { Worker} from "./classes/Worker";


let Billy = new Manager("Billy Smith", "CT", 23, "New Haven");
let Johnny = new Worker("Johnny Polasky", "CT", 45, "New Haven");
Billy.giveOrders();
Johnny.doesTask();
Billy.sayWelcome();
let Cindy = new Manager("Cindy Smith", "CA", 22, "LA");


export {}; 
