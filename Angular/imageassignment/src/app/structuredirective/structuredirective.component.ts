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
  displayedColumns: string[] = ['ID', 'Name', 'Price',  'Expiry Date','Quantity', 'InStock'];
  constructor(private dataservice:DataserviceService) { }

  ngOnInit(): void {
    this.products = this.dataservice.getProducts();
    console.log(this.products);
  }
}
