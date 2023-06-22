import { Component } from "@angular/core";

@ Component({
    selector : 'help-app',
    template : ` SPA - Single Page application - Angular
            <h1>Help available at : {{ mobileNumber }}</h1>
              <img [src]=imageURL>      -- Property Binding
              <button (click)="changeURL()">Go</button>     -- Event Binding
              <h1>Name : <input type="text" [(ngModel)]="name"></h1>
             {{name}}
             <h1>Number 1 : <input type="number" [(ngModel)]="num1"></h1>
             <h1>Number 2 : <input type="number" [(ngModel)]="num2"></h1>
             {{ num1+num2 }}
    `,
    styleUrls : ['./app.component.css']
})
export class HelpComponent
{
        num1!: number;
        num2!: number;

    public name :string ="Jaya";


    public name1 ="A";
    public name2 :string = "B";
    public name3!: string;

    mobileNumber = "+91+8867205331"
    imageURL = "https://picsum.photos/200/300"

    changeURL()
    {
       console.log("Change URL called")
    }
}
