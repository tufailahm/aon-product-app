import { Component } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {
  myName:string = "";
  postalCode:string ="";
  saveData(){
      console.log(this.myName +"    "+this.postalCode);
  }
}