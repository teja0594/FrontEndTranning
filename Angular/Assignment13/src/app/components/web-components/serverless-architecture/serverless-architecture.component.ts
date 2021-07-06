import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-serverless-architecture',
  templateUrl: './serverless-architecture.component.html',
  styleUrls: ['./serverless-architecture.component.css']
})
export class ServerlessArchitectureComponent implements OnInit {

  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="low"
  filter:any="all"
  wtech:any={}
  webtech:any=[]
  constructor(private service:WebService) { }
  ngOnInit(): void {
    this.service.getAllWebTech().subscribe(
      data => data.forEach((val:any) => (val.webid=='wsa') ? this.wtech = val : console.log(-1)))

    this.service.getServerlessArchitecture().subscribe(
      data=>this.webtech=data)
  }
}
