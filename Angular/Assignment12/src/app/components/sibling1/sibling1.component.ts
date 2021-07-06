import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  flag=false;
  customers:any=[]
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.addCustomer({
      id:1244,
      name:"Kedari Teja",
      phone:1234567890,
      email:'teja@gmai.com'
    })
     this.dataService.customersData.subscribe(data => this.customers=data);
  }

  addCustomer(id:any,name:any,phone:any,email:any):any
  {

    var customer={
      id:id,
      name:name,
      phone:phone,
      email:email
    }
    this.dataService.addCustomer(customer)
  }
  getForm():any
  {
this.flag=true;
  }

}
