import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  height = 300;
  width = 300;
  imgsource= "../assets/front.jpg";

  leave():void{

  this.imgsource ="../assets/front.jpg"
 }
  
  setproperty():void {
    
    this.imgsource = "../assets/back.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
