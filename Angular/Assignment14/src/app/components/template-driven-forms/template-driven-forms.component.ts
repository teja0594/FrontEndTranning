import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {


 data:any
  constructor() { }

  ngOnInit(): void {
  }
  submitData(value:any)
  {
    this.data=value
  console.log(value)
  }
}
