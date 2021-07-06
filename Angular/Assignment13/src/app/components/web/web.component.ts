import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {


  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="a-z"
  filter:any="all"
wtechs:any=[];
constructor(private service:WebService) { }

ngOnInit(): void {
  this.getWebTech();
}
getWebTech():any{
  this. service.getAllWebTech().subscribe(
    data => {this.wtechs = data
    console.log(data)},
    error => console.log(error));
}
}
