import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FormaterPipe } from './pipes/formater.pipe';
import { HttpClientModule } from '@angular/common/http';
import { JavaComponent } from './components/java/java.component';
import { WebComponent } from './components/web/web.component';
import { Ngcolor1Directive } from './directives/ngcolor1.directive';
import { CoreJavaComponent } from './components/java-components/core-java/core-java.component';
import { AdvJavaComponent } from './components/java-components/adv-java/adv-java.component';
import { HibernateComponent } from './components/java-components/hibernate/hibernate.component';
import { SpringComponent } from './components/java-components/spring/spring.component';
import { JsfComponent } from './components/java-components/jsf/jsf.component';
import { JavaJacksonComponent } from './components/java-components/java-jackson/java-jackson.component';
import { JavaAppletsComponent } from './components/java-components/java-applets/java-applets.component';
import { FooterComponent } from './footer/footer.component';
import { BlockchainComponent } from './components/web-components/blockchain/blockchain.component';
import { ProgressivewebComponent } from './components/web-components/progressiveweb/progressiveweb.component';
import { SinglepageComponent } from './components/web-components/singlepage/singlepage.component';
import { MotionUIComponent } from './components/web-components/motion-ui/motion-ui.component';
import { IotComponent } from './components/web-components/iot/iot.component';
import { ServerlessArchitectureComponent } from './components/web-components/serverless-architecture/serverless-architecture.component';
import { ArtificialIntelligenceComponent } from './components/web-components/artificial-intelligence/artificial-intelligence.component';


@NgModule({
  declarations: [
    AppComponent,,HomeComponent,
  WebComponent,SearchPipe,SortPipe,
       JavaComponent, Ngcolor1Directive,
 CoreJavaComponent,
        AdvJavaComponent, HibernateComponent, SpringComponent,
         JsfComponent, JavaJacksonComponent, JavaAppletsComponent,
       FooterComponent, BlockchainComponent,
           ProgressivewebComponent, SinglepageComponent, MotionUIComponent,
           IotComponent, ServerlessArchitectureComponent, ArtificialIntelligenceComponent,

  ],
  imports: [
    BrowserModule,AppRoutingModule,
    BrowserAnimationsModule, MaterialModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ ]
})
export class AppModule { }
