import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngColor1]'
})
export class Ngcolor1Directive {

  @HostBinding('style.color')color:String
  @HostBinding('style.backgroundColor')bgcolor:String
  @HostBinding('style.fontFamily')font:String
  @HostBinding('style.fontWeight')fontweight:String
  constructor(eleref:ElementRef,render:Renderer2) {
    this.color='black'
    this.bgcolor="white"
    this.font="Arial"
    this.fontweight="normal"
   }

   @HostListener('mouseover') onMouseOver()
   {
    this.color='red'
     this.bgcolor="rgb(245,245,245)"

   }


   @HostListener('mouseleave') onMouseLeave()
   {
    this.color='black'
     this.bgcolor="white"
     this.fontweight="normal"
   }


}
