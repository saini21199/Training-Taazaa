import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  this.showDataBindingDemo = false;
  this.showDirectiveDemo = false;
  this.showPurchaseDemo=false;
  }


  showchild1=false;
  showchild2=false;

  title = "Data Binding";
  showDataBindingDemo = true;
  showDirectiveDemo = false;
  showPurchaseDemo=false;
  showattribute =false;
  showdbdemo(): void {
    this.showDataBindingDemo = true;
    this.showDirectiveDemo = false;
    this.title="Data Binding"
    this.showPurchaseDemo=false;
  }

  showcomponents(): void {
    this.showchild1=true;
    this.showchild1=true;
  }

  showdirectivedemo(): void {
    this.showDirectiveDemo = true;
    this.showDataBindingDemo = false;
    this.showPurchaseDemo=false;
    this.title="Displaying products using directive"

  }

  showpurchasedemo() : void{
    this.showDirectiveDemo = false;
    this.showDataBindingDemo = false;
    this.showPurchaseDemo=true;
    this.title="Displaying Purchase component"
  }
  
  showcustomattribute() : void {
    this.showattribute =true;
  }
 
 

}
