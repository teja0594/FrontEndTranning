import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html',
  styleUrls: ['./model-driven-forms.component.css']
})
export class ModelDrivenFormsComponent implements OnInit {

  data:any
  constructor(private formBuilder:FormBuilder){}
  User = this.formBuilder.group(
    {
    userName: ['', [Validators.required,Validators.minLength(3), Validators.pattern('^[A-Z][a-z]* [A-Z][a-z]*$')]],
    userEmail:['', [Validators.required,Validators.pattern('^[a-zA-Z0-9._]{5,15}@[a-z]{3,15}.[a-z]{2,15}$')]],
    userAddess: this.formBuilder.group(
      {
      userCity:['', [Validators.required, Validators.pattern('^[A-Z][a-z]*$')]],
     userPostalCode:['', [Validators.required,Validators.minLength(6), Validators.pattern('^[0-9]{6,6}$')]]
    })
  })

  ngOnInit()
  {
  }
  submitData() {
    console.log(this.User)
    console.log(this.User.value)
    this.data=this.User.value
  }

}
