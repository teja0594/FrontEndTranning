import { RBI } from "./RBI";

export class HDFCBank implements RBI
{
    custID
    custName
   si=3.5
   fi=7
   ri=9.5
    constructor(id,name,)
    {
        this.custID=id
        this.custName=name

    }
    getSavingsDeposit(amount:number)
    {
       
        console.log("SavingsDeposit")
        console.log(`Deposit Amount: ${amount}`)
        console.log(`SavingsIntrestRate: ${this.si}%`)
        console.log(`Amount after 2 years ${amount*Math.pow((1+this.si/100),2)}`)
    }
    getFixedDeposit(amount:number)
    {
        console.log("FixedDeposit")
        console.log(`Deposit Amount: ${amount}`)
        console.log(`FixedIntrestRate: ${this.fi}%`)
        console.log(`Amount after 2 years ${amount+(amount*(this.fi/100)*2)}`)
    }
    getRecuringDeposit(amount:number)
    {
        console.log("RecuringDeposit")
        console.log(`Deposit Amount: ${amount}`)
        console.log(`RecuringIntrestRate: ${this.ri}%`)
        
        var Pn=amount*2*12
        var rintrest=Pn+((Pn*(2+1))/2)*(this.ri/100)*(1/12)
     console.log(`Amount after 2 years ${rintrest}`)
    }
}