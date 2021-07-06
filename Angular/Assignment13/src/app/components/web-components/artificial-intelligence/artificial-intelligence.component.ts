import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-artificial-intelligence',
  templateUrl: './artificial-intelligence.component.html',
  styleUrls: ['./artificial-intelligence.component.css']
})
export class ArtificialIntelligenceComponent implements OnInit {

  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="low"
  filter:any="all"
  wtech:any={}
  webtech:any=[]
  constructor(private service:WebService) { }
  ngOnInit(): void {
    this.service.getAllWebTech().subscribe(
      data => data.forEach((val:any) => (val.webid=='waib') ? this.wtech = val : console.log(-1)))

    this.service.getAI().subscribe(
      data=>this.webtech=data)
  }
}
