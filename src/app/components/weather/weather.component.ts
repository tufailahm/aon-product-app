import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
 
})
export class WeatherComponent {

    @Output()
    eventEmitter = new EventEmitter<string>();

    @Input()
    public cityName:string ="NotAvailable"

    onchangeValue(value:any){
        console.log(value);
        this.eventEmitter.emit(value);
    }
}
