import { Component, OnInit } from '@angular/core';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  stars:any=['','⭐','⭐⭐','⭐⭐⭐','⭐⭐⭐⭐','⭐⭐⭐⭐⭐']
  funnel:any="a-z"
  filter:any="all"
jcourses:any=[];
constructor(private service:JavaService) { }
ngOnInit(): void {
  this.getJavaCourses();
}
getJavaCourses():any{
  this. service.getAllJavaCourses().subscribe(
    data => {this.jcourses = data
    console.log(data)},
    error => console.log(error));
}
}
