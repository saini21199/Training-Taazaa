import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyerrorhandlerService implements ErrorHandler {
  constructor() { }
  handleError(error: string): void {
    error="I will handle all my error other than API Errors";
    console.log(error);
  }
}
