import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  number1:any;
  number2:any
  result:any;
  constructor() { }

  ngOnInit(): void {
  }

  Perform(operator:any,group:any)
  {
    var a =(Number)(this.number1)
    var b =(Number)(this.number2)
    this.result= (group=='ps') ? ((operator =='+') ? (a+b) : (a-b)) : ((operator =='x') ? (a*b) : (a/b))


  }

}
