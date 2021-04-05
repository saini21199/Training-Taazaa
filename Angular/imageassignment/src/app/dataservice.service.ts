import { Injectable } from '@angular/core';
import { PurcahseItem } from './purchase/Ipurchaseitem';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }
  getPurcahse(): PurcahseItem[] {
    return [
      {
        purchaseId: 1,
        purchaseTitle: "Taazaa",
        purchaseDate: "10-06-2021",
        vendorname: "ABC",
        items: [{
          Id: 100,
          Title: "pen",
          Price: 1000,
          ExpiryDate: "17-09-2045",
          isInStock: true,
          Quantity: 100

        }
        ]
      },
      {
        purchaseId: 2,
        purchaseTitle: "Microsoft",
        purchaseDate: "25-06-2018",
        vendorname: "XYZ",
        items: [{
          Id: 101,
          Title: "Pencil",
          Price: 10,
          ExpiryDate: "01-05-2055",
          isInStock: false,
          Quantity: 75

        },
        {
          Id: 102,
          Title: "Bag",
          Price: 900,
          ExpiryDate: "1-07-2155",
          isInStock: true,
          Quantity: 5

        }
        ]
      },
      {
        purchaseId: 3,
        purchaseTitle: "Amazon",
        purchaseDate: "03-04-2021",
        vendorname: "PQR",
        items: [{
          Id: 103,
          Title: "Book",
          Price: 710,
          ExpiryDate: "01-05-2055",
          isInStock: true,
          Quantity: 765

        },
        {
          Id: 104,
          Title: "keyboard",
          Price: 540,
          ExpiryDate: "11-02-2055",
          isInStock: true,
          Quantity: 325

        }
        ]
      }
      
    ]


  }
  getProducts(): any {
    return [
      {
        Id: 1,
        Title: 'Pen',
        Price: 100,
        ExpiryDate: "04-03-2021",
        isInStock: true,
        Quantity: 51
      },
      {
        Id: 2,
        Title: 'Mobile',
        Price: 7000,
        ExpiryDate: "02-12-2031",
        isInStock: true,
        Quantity: 15
      },
      {
        Id: 3,
        Title: 'Laptop',
        Price: 20000,
        ExpiryDate: "06-14-2091",
        isInStock: false,
        Quantity: 0
      },
      {
        Id: 4,
        Title: 'Bag',
        Price: 70,
        ExpiryDate: "08-25-2041",
        isInStock: true,
        Quantity: 31
      }

    ]

  }
}
