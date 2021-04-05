import { Component, OnInit } from '@angular/core';
import { SenddataService } from '../senddata.service';
import { Product } from '../structuredirective/Iproduct';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  
  products: Product;
  constructor(private data:SenddataService) { }

  ngOnInit(): void {
    this.data.product$.subscribe((c)=> this.products=c);
  }
  

}
