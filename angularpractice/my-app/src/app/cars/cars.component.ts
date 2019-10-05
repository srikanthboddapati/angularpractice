import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() { }
  public title : string = 'Ultra Racing';
  carParts =[ {
    "id" :1,
    "name":`Super Tires`,
    "description":"These tyres are very best",
    "instock":5
  },
  {
    "id" :2,
    "name":"Super Tires2",
    "description":"These tyres are very best",
    "instock":5
  },
  {
    "id" :3,
    "name":"Super Tires3",
    "description":"These tyres are very best",
    "instock":0
  }
  ];

  ngOnInit() {
  }

}
