import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  evaluate(a:any,b:any,op:any,opGroup:any):any{

    return (opGroup=='ps') ? ((op=='+') ? (a+b) : (a-b)) : ((op=='x') ? (a*b) : (a/b))

  }
}
