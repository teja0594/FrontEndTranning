import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-motion-ui',
  templateUrl: './motion-ui.component.html',
  styleUrls: ['./motion-ui.component.css']
})
export class MotionUIComponent implements OnInit {

  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="low"
  filter:any="all"
  wtech:any={}
  webtech:any=[]
  constructor(private service:WebService) { }
  ngOnInit(): void {
    this.service.getAllWebTech().subscribe(
      data => data.forEach((val:any) => (val.webid=='wmui') ? this.wtech = val : console.log(-1)))

    this.service.getMotionUI().subscribe(
      data=>this.webtech=data)
  }

}
