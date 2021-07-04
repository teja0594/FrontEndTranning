import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input() MoneyGift:any=0
@Output() MoneyTransactions:EventEmitter<any>= new EventEmitter<any>();

vaie:any=0
d:Date=new Date()

  constructor() { }

  ngOnInit(): void { }



  invest(itype:any):any
  {
   var transactions:any={date:this.d,out : 0,int : 0,balance:0,type:""};

    if(itype=="stocks")
    {
      transactions.date=new Date()
      transactions.out=this.mathRan()
      this.vaie= -1*transactions.out
      transactions.in="-----"
      transactions.balance=this.MoneyGift-=transactions.out
      transactions.type="Stocks"
    }
    else{
      transactions.date=new Date()
      transactions.out='-----'
      transactions.in=this.mathRan()
      this.vaie= transactions.in
      this.MoneyGift=(Number)(this.MoneyGift)+(Number)(transactions.in)
     transactions.balance=this.MoneyGift
      transactions.type="MutualFunds"
    }
    this.MoneyTransactions.emit(transactions);
  }
  mathRan():any
  {
   return Math.floor((Math.random()*999)+1);
  }
}
