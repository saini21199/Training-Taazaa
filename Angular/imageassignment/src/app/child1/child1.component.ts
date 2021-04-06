import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { SenddataService } from '../senddata.service';
import { Product } from '../structuredirective/Iproduct';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  input1: number = 0;
  product: Product;
  constructor(private senddata: SenddataService) { }
  productEditForm: FormGroup;
  ngOnInit(): void {
    this.senddata.product$.subscribe(data => {
      this.product = data;
    })
    this.productEditForm = new FormGroup({
      Id: new FormControl(this.product?.Id, [Validators.required]),
      Title: new FormControl(this.product?.Title, [Validators.required]),
      Price: new FormControl(this.product?.Price, [Validators.required]),
      ExpiryDate: new FormControl(this.product?.ExpiryDate, [Validators.required]),
      Quantity: new FormControl(this.product?.Quantity, [Validators.required]),
      isInStock: new FormControl(this.product?.isInStock, [Validators.required]),
    });
  }

  sendData() {
    this.senddata.setPrice(this.input1);
  }

  updateProduct() {
    this.senddata.updateProduct(this.productEditForm.value);
  }

  

}
