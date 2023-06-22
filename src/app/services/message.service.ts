import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  getCompanyName(){
    return "Welcome to AON Consulting Ltd";
  }

  getSum():number{
    return 2+2;
  }
}
