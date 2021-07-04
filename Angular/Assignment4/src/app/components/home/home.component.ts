import { Component, OnInit } from '@angular/core';

 interface Object
{
    one:Number,
    two:String,
    three:Boolean,
    four:Number[],
    five:String[],
    six:[Number,String,Boolean],
    seven:Number|String|Boolean,
    eight:any,
    nine:any,
    ten:any[]
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


   obj:Object={
    one:10,
    two:'twenty',
    three:true,
    four:[1,2,3],
    five:["teja","prem","kumar"],
    six:[6,"six",true],
    seven:"123456789",
    eight:{ fname:'Prem',lname:'kumar', num:123456 },
    nine: 10,
    ten:[1,"two",true,[1,2,3],{name:"teja",num:1234567890}]
}
  constructor() { }

  ngOnInit(): void {
  }

}
