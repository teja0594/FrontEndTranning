import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  PocketMoney:any
  money:any=0
  transactions:any=[]

  constructor() { }

  ngOnInit(): void { }

getTransactions(data:any):any
{
  //this.transactions.push(data);
  this.transactions.unshift(data);
}
send()
{
  this.money=this.PocketMoney
}

}
