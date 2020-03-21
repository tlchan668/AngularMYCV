import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycv';
  txtName: string = "Traci Chan";
  txtAddress: string = "10 South Rd. Ind. KY 41051";
  txtEmail:string = "tlc@gmail.com";
  txtPhone:string = "859.816.8888";

/*
   jobs = [
    {
    company:"Cintas",
    date: "2018-2020",
    value:["processed payment", "trained"]
    
    },
    {
      company:"Amazon",
      date: "2018",
      value:["packed bboxes", "played tetris"] 
    }
  ];
  
  schools = [
    {
      school: "NKU",
      degree: "CS"
    },
    {
      school: "Max",
      degree: "BS"
    }
  ];
  */
}



