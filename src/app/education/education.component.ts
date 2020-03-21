import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  schools: any = [
    {
      school: "NKU",
      degree: "CS"
    },
    {
      school: "Max",
      degree: "BS"
    }
  ];

}
