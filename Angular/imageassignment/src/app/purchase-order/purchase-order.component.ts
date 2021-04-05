import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PurcahseItem } from '../purchase/Ipurchaseitem';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit,OnChanges {

  @Input() PurchaseItem : PurcahseItem;
  Price=0;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.PurchaseItem.items.forEach(i=>{
      this.Price=this.Price + i.Price;
    })
  }

}
