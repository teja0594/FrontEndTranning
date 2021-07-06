import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvJavaComponent } from './components/java-components/adv-java/adv-java.component';
import { CoreJavaComponent } from './components/java-components/core-java/core-java.component';
import { HibernateComponent } from './components/java-components/hibernate/hibernate.component';
import { JavaAppletsComponent } from './components/java-components/java-applets/java-applets.component';
import { JavaJacksonComponent } from './components/java-components/java-jackson/java-jackson.component';
import { JsfComponent } from './components/java-components/jsf/jsf.component';
import { SpringComponent } from './components/java-components/spring/spring.component';
import { JavaComponent } from './components/java/java.component';
import { ArtificialIntelligenceComponent } from './components/web-components/artificial-intelligence/artificial-intelligence.component';
import { BlockchainComponent } from './components/web-components/blockchain/blockchain.component';
import { IotComponent } from './components/web-components/iot/iot.component';
import { MotionUIComponent } from './components/web-components/motion-ui/motion-ui.component';
import { ProgressivewebComponent } from './components/web-components/progressiveweb/progressiveweb.component';
import { ServerlessArchitectureComponent } from './components/web-components/serverless-architecture/serverless-architecture.component';
import { SinglepageComponent } from './components/web-components/singlepage/singlepage.component';
import { WebComponent } from './components/web/web.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'java',component:JavaComponent,
   children:[
     {path:'jcore',component:CoreJavaComponent},
     {path:'japps',component:JavaAppletsComponent},
     {path:'j2ee',component:AdvJavaComponent},
     {path:'jorm',component:HibernateComponent},
     {path:'jspring',component:SpringComponent},
     {path:'jsf',component:JsfComponent},
     {path:'jjson',component:JavaJacksonComponent},
    ]},
  {path:'web',component:WebComponent,
  children:[
    {path:'wpwa',component:ProgressivewebComponent},
    {path:'waib',component:ArtificialIntelligenceComponent},
    {path:'wsa',component:ServerlessArchitectureComponent},
    {path:'wmui',component:MotionUIComponent},
    {path:'wspa',component:SinglepageComponent},
    {path:'wbct',component:BlockchainComponent},
    {path:'wiot',component:IotComponent},
   ]},
  {path:'home',component:HomeComponent},
   {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
