import { Component, OnInit } from '@angular/core';
import { MyerrorhandlerService } from '../myerrorhandler.service';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})
export class ErrorHandlerComponent implements OnInit {

  constructor(private errorhandler: MyerrorhandlerService) { }

  ngOnInit(): void {
  }
  data:any =undefined;
  generateError(): void{
    this.data.sort();
  }
}
