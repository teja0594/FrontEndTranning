import { obj } from "./module1";
import { Bank } from "./module2";

console.log(obj)
console.log(" ")
console.log("------------------------------")
var account1 = new Bank(123,"Teja")
console.log(`Customer Id  : ${account1.customerId}
Customer Name: ${account1.customerName}`)
console.log(`FixedDeposit ${account1.getFixedDeposit(10000,8,5)}`)
console.log(`RecuringDeposit after 2 years ${account1.getRecurringDeposit(10000,4,2)}`)
