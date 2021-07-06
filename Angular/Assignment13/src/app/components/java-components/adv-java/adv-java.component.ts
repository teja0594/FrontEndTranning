import { Component, OnInit } from '@angular/core';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-adv-java',
  templateUrl: './adv-java.component.html',
  styleUrls: ['./adv-java.component.css']
})
export class AdvJavaComponent implements OnInit {

  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="low"
  filter:any="all"
  cjava:any={}
  corejava:any=[]
  constructor(private service:JavaService) { }
  ngOnInit(): void {
    this.service.getAllJavaCourses().subscribe(
      data => data.forEach((val:any) => (val.courseid=='j2ee') ? this.cjava = val : console.log(-1)))

    this.service.getAdvJava().subscribe(
      data=>this.corejava=data)
  }
}
