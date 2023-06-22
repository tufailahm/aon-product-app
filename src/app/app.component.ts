import { Component } from "@angular/core";

@Component({
    selector : 'app-root',
    templateUrl : './app.component.html',
    // styles : [' h1 { color:red; font-style:bold } h2 { color: green } '],
    styleUrls : ['./app.component.css']
})
export class AppComponent
{
        salary = 258000;
        message = "AON Alstrom Product App";
        employeeName : string = "Mohammad Tufail"
        name="Ahmed";
        email = 'tufailahmedkhan@gmail.com';
        address = {
                city : 'Pune',
                state : 'Maharashtra'
        }

        companyName = "AON Technologies";
    

}