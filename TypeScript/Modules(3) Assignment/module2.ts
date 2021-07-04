export class Bank
{
    customerId:Number;
    customerName:String;


    constructor(id,name)
    {
        this.customerId=id
        this.customerName=name
    }

    getFixedDeposit(amount,intrestRtate,tenure)
    {
        var fdi = amount*(intrestRtate/100)*tenure
        return amount+fdi
        
    }
    getRecurringDeposit(moneyPerMonth,intrestRate,tenure)
    {
        var rintrest=0
        var Pn=moneyPerMonth*tenure*12
     rintrest=rintrest+((Pn*(tenure+1))/2)*(intrestRate/100)*(1/12)
 
    return Pn+rintrest


}
}