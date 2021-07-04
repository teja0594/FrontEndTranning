import { HDFCBank } from "./HDFCBank";
import {ICICIBank} from "./ICICIBank"

console.log("---------------------------")
var c1 = new HDFCBank(12354,"Teja")
console.log(`CustomerID ${c1.custID}
CustomerName ${c1.custName}`)
c1.getFixedDeposit(10000)
console.log("---------------------------")
c1.getSavingsDeposit(1000)
console.log("---------------------------")
c1.getRecuringDeposit(4500)
console.log("---------------------------")
var c2 = new ICICIBank(43251,"Prem")
console.log(`CustomerID ${c2.custID}
CustomerName ${c2.custName}`)
c2.getFixedDeposit(10000)
console.log("---------------------------")
c2.getSavingsDeposit(1000)
console.log("---------------------------")
c2.getRecuringDeposit(4500)