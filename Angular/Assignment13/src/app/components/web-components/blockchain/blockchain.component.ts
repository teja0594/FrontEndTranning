import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="low"
  filter:any="all"
  wtech:any={}
  webtech:any=[]
  constructor(private service:WebService) { }
  ngOnInit(): void {
    this.service.getAllWebTech().subscribe(
      data => data.forEach((val:any) => (val.webid=='wbct') ? this.wtech = val : console.log(-1)))

    this.service.getBlockChain().subscribe(
      data=>this.webtech=data)
  }
}
