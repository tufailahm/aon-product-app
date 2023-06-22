import { Component } from '@angular/core';
import { People } from 'src/app/models/people';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  public married: boolean = false;
  public color = 'red';
  public departments = ["HR", "Finance", "Inventory", "Medical"];
  public newdept!: string;
  //to add newdept to departments array
  addDepartment() {
    console.log("add department called");
    this.departments.push(this.newdept);
  }
  deleteDepartment(d: any) {
    console.log("deleting :" + d)
    //delete d from departments
    let index = this.departments.indexOf(d);
    this.departments.splice(index, 1);
  }


  //people complex object
  people: People[] = [
    {
      "name": "Tufail Ahmed",
      "country": 'IN'
    },
    {
      "name": "Neha Sharma",
      "country": 'UK'
    },
    {
      "name": "Ravi Kiran",
      "country": 'IN'
    },
    {
      "name": "Tarun Sharma",
      "country": 'IN'
    },
    {
      "name": "Cook Tyson",
      "country": 'USA'
    }
  ];


  getColor(country:any) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'IN':
        return 'red';
      default :
        return 'yellow';
    }
  }
}
