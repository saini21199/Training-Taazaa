import { Component, OnInit,EventEmitter } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { PurcahseItem } from './Ipurchaseitem';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchasedlist : PurcahseItem[] =[];

  constructor(private dataservie : DataserviceService) { }

  ngOnInit(): void {
    this.purchasedlist = this.dataservie.getPurcahse();
  }


  
}