import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './structuredirective/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class SenddataService {

  product = {
    Id: 1,
    Title: 'Pen',
    Price: 100,
    ExpiryDate: "04-03-2021",
    isInStock: true,
    Quantity: 51
  };

  product$ : BehaviorSubject<Product>;
  constructor() { 
    this.product$ = new BehaviorSubject(this.product);
  }

  setPrice(price :number){
    this.product.Price = price;
  }

  updateProduct (p: Product){
    this.product ={
      ...p
    }
    this.product$.next(this.product);
  }
}
