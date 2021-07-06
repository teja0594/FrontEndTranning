import { Component, OnInit } from '@angular/core';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-spring',
  templateUrl: './spring.component.html',
  styleUrls: ['./spring.component.css']
})
export class SpringComponent implements OnInit {

  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="low"
  filter:any="all"
  cjava:any={}
  corejava:any=[]
  constructor(private service:JavaService) { }
  ngOnInit(): void {
    this.service.getAllJavaCourses().subscribe(
      data => data.forEach((val:any) => (val.courseid=='jspring') ? this.cjava = val : console.log(-1)))
      this.service.getSpring().subscribe(
        data=>this.corejava=data)
  }
}
