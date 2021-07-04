import { Bank } from "./Bank";
export interface RBI extends Bank
{
  
    getFixedDeposit(amount:Number)
    getRecuringDeposit(amount:Number)
}