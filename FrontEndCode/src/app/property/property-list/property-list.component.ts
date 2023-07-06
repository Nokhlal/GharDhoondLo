import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "PropertyName": "Amba G Residency",
        "Type": "House",
        "Id": 1,
        "Price": 12000
    },
    {
      "PropertyName": "VVIP Homes",
        "Type": "House",
        "Id": 1,
        "Price": 15500
    },
    {
      "PropertyName": "Ashiana Greens",
        "Type": "House",
        "Id": 1,
        "Price": 23000
    },
    {
      "PropertyName": "Exotica DreamVille",
        "Type": "House",
        "Id": 1,
        "Price": 19400
    },
    {
      "PropertyName": "14th Avenue",
        "Type": "House",
        "Id": 1,
        "Price": 11000
    },
    {
      "PropertyName": "Pam Olympia",
        "Type": "House",
        "Id": 1,
        "Price": 18000
    },
    {
      "PropertyName": "Shipra Sun City",
        "Type": "House",
        "Id": 1,
        "Price": 17000
    },
    {
      "PropertyName": "Prateek Fedora",
        "Type": "House",
        "Id": 1,
        "Price": 13000
    },
    {
      "PropertyName": "Nirala Estate",
        "Type": "House",
        "Id": 1,
        "Price": 32500
    },
    {
      "PropertyName": "Vijay House",
        "Type": "House",
        "Id": 1,
        "Price": 13400
    },
    {
      "PropertyName": "Kalpatru Residency",
        "Type": "House",
        "Id": 1,
        "Price": 10000
    },
    {
      "PropertyName": "Nivas Asthan",
        "Type": "House",
        "Id": 1,
        "Price": 18000
    },
    {
      "PropertyName": "Cantabell House",
        "Type": "House",
        "Id": 1,
        "Price": 32000
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
