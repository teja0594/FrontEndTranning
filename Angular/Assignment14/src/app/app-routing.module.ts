import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'forms',component:FormsComponent,
children:[
  {path:'templateforms',component:TemplateDrivenFormsComponent}
]},
  {path:'home',component:HomeComponent},
   {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
