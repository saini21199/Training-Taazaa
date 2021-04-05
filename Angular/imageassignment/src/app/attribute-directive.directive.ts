import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAttributeDirective]'
})
export class AttributeDirectiveDirective {

  @Input() color : string;

  @HostBinding('style.border') hostborder : string;

  constructor(private e1 :ElementRef,private renderer :Renderer2) { 
    console.log(this.color);
  }

  changeBgColor(color: string){
    this.renderer.setStyle(this.e1.nativeElement,'color',color);
  }

  @HostListener('click') foo(){
    alert('hello');
  }

  @HostListener('mouseenter') abc(){
    this.changeBgColor(this.color);
    this.hostborder = '5px solid green'
  }

  @HostListener('mouseleave') xyz(){
    this.changeBgColor('black');
    this.hostborder = ''
  }
}
