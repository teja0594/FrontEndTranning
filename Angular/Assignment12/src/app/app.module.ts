import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Sibling1Component } from './components/sibling1/sibling1.component';
import { Sibling2Component } from './components/sibling2/sibling2.component';

@NgModule({
  declarations: [
    AppComponent,Sibling1Component,
      Sibling2Component
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
