import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VM-Angular-Project';
  productwelcome:any="hello Product"
  childdata:any
  getData(data:any)
  {
this.childdata=data
  }
}
