import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  customers:any=[]
  exportCustomers = new BehaviorSubject(this.customers)
  customersData = this.exportCustomers.asObservable()
  constructor() { }

  addCustomer(customer:any):any
  {
     this.exportCustomers.value.push(customer)
  }
}
