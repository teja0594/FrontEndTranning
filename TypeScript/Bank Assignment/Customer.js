"use strict";
exports.__esModule = true;
var HDFCBank_1 = require("./HDFCBank");
var ICICIBank_1 = require("./ICICIBank");
console.log("---------------------------");
var c1 = new HDFCBank_1.HDFCBank(12354, "Teja");
console.log("CustomerID " + c1.custID + "\nCustomerName " + c1.custName);
c1.getFixedDeposit(10000);
console.log("---------------------------");
c1.getSavingsDeposit(1000);
console.log("---------------------------");
c1.getRecuringDeposit(4500);
console.log("---------------------------");
var c2 = new ICICIBank_1.ICICIBank(43251, "Prem");
console.log("CustomerID " + c2.custID + "\nCustomerName " + c2.custName);
c2.getFixedDeposit(10000);
console.log("---------------------------");
c2.getSavingsDeposit(1000);
console.log("---------------------------");
c2.getRecuringDeposit(4500);
