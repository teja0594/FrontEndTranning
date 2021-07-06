import { Component, OnInit } from '@angular/core';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-jsf',
  templateUrl: './jsf.component.html',
  styleUrls: ['./jsf.component.css']
})
export class JsfComponent implements OnInit {

  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="low"
  filter:any="all"
  cjava:any={}
  corejava:any=[]
  constructor(private service:JavaService) { }
  ngOnInit(): void {
    this.service.getAllJavaCourses().subscribe(
      data => data.forEach((val:any) => (val.courseid=='jsf') ? this.cjava = val : console.log(-1)))
      this.service.getJSF().subscribe(
        data=>this.corejava=data)
  }

}
