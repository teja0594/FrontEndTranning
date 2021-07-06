import { Component, OnInit } from '@angular/core';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-core-java',
  templateUrl: './core-java.component.html',
  styleUrls: ['./core-java.component.css']
})
export class CoreJavaComponent implements OnInit {

  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="low"
  filter:any="all"
  cjava:any={}
  corejava:any=[]
  constructor(private service:JavaService) { }
  ngOnInit(): void {
    this.service.getAllJavaCourses().subscribe(
      data => data.forEach((val:any) => (val.courseid=='jcore') ? this.cjava = val : console.log(-1))
    )
    this.service.getJavaCore().subscribe(
      data=>this.corejava=data
    )
  }

}
