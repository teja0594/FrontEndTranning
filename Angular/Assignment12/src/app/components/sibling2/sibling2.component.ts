import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  customers:any=[]
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
     this.dataService.customersData.subscribe(data => this.customers=data);
  }
}
