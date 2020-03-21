import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  jobs: any = [
    {
    company:"Cintas",
    date: "2018-2020",
    value:["processed payment", "trained new minds"]
    
    },
    {
      company:"Amazon",
      date: "2018",
      value:["packed bboxes", "played tetris"] 
    }
  ];
}
