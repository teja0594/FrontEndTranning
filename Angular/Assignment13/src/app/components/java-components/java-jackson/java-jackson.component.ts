import { Component, OnInit } from '@angular/core';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-java-jackson',
  templateUrl: './java-jackson.component.html',
  styleUrls: ['./java-jackson.component.css']
})
export class JavaJacksonComponent implements OnInit {

  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="low"
  filter:any="all"
  cjava:any={}
  corejava:any=[]
  constructor(private service:JavaService) { }
  ngOnInit(): void {
    this.service.getAllJavaCourses().subscribe(
      data => data.forEach((val:any) => (val.courseid=='jjson') ? this.cjava = val : console.log(-1)))
      this.service.getJavaJackson().subscribe(
        data=>this.corejava=data)
  }

}
