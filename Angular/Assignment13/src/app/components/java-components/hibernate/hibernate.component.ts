import { Component, OnInit } from '@angular/core';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-hibernate',
  templateUrl: './hibernate.component.html',
  styleUrls: ['./hibernate.component.css']
})
export class HibernateComponent implements OnInit {

  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="low"
  filter:any="all"
  cjava:any={}
  corejava:any=[]
  constructor(private service:JavaService) { }
  ngOnInit(): void {
    this.service.getAllJavaCourses().subscribe(
      data => data.forEach((val:any) => (val.courseid=='jorm') ? this.cjava = val : console.log(-1)))
      this.service.getHibernate().subscribe(
        data=>this.corejava=data)
  }
}
