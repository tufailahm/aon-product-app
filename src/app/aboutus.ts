import { Component } from "@angular/core";

@ Component({
    selector : 'about-app',
    template : '<h1>About us : Mohammad Tufail Ahmed<h1> {{ hello }}'
})
export class AboutusComponent
{
    hello = "JJ";
    
}
