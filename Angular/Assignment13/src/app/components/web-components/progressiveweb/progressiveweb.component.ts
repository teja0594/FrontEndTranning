import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-progressiveweb',
  templateUrl: './progressiveweb.component.html',
  styleUrls: ['./progressiveweb.component.css']
})
export class ProgressivewebComponent implements OnInit {

  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="low"
  filter:any="all"
  wtech:any={}
  webtech:any=[]
  constructor(private service:WebService) { }
  ngOnInit(): void {
    this.service.getAllWebTech().subscribe(
      data => data.forEach((val:any) => (val.webid=='wpwa') ? this.wtech = val : console.log(-1)))

    this.service.getPWA().subscribe(
      data=>this.webtech=data)
  }
}
