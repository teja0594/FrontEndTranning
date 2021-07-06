import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {

  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="low"
  filter:any="all"
  wtech:any={}
  webtech:any=[]
  constructor(private service:WebService) { }
  ngOnInit(): void {
    this.service.getAllWebTech().subscribe(
      data => data.forEach((val:any) => (val.webid=='wiot') ? this.wtech = val : console.log(-1)))

    this.service.getIOT().subscribe(
      data=>this.webtech=data)
  }

}
