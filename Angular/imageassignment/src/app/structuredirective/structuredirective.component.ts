import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Product } from './Iproduct';
@Component({
  selector: 'app-structuredirective',
  templateUrl: './structuredirective.component.html',
  styleUrls: ['./structuredirective.component.css']
})
export class StructuredirectiveComponent implements OnInit {

  products: Product[] = [];
  search: string = '';
  price : number;
  
  constructor(private dataservice:DataserviceService) { }

  ngOnInit(): void {
    this.products = this.dataservice.getProducts();
  }
}
