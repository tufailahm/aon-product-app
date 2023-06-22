import { Component } from "@angular/core";

@ Component({
    selector : 'contact-app',
    template : `<h1>Contact us at : {{ mobileNumber }} - Link might not be available</h1>
  
    <hr/>
        Name : <input type="text" #demo>
        <button (click)="display(demo.value)">Hi</button>
        {{ message }}
    <hr/>
        `
})
export class ContactusComponent
{
    mobileNumber = "8867205331"
    message : string = "";

    display(value:any){
        console.log("Hi :"+value);
        this.message = "Hi : "+ value;
    }
}
