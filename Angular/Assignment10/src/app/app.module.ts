import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './components/product/product.component';
import { NgColorDirective } from './directives/ng-color.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,ProductComponent,
    NgColorDirective,
    ReversePipe,SearchPipe,SortPipe
  ],
  imports: [
    BrowserModule, FormsModule,
    BrowserAnimationsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ ]
})
export class AppModule { }
