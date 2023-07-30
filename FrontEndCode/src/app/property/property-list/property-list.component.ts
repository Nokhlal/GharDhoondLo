import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../iproperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty> = [];
  sellRent: number = 1;
  constructor(private router: ActivatedRoute, private housingService: HousingService) {}

  ngOnInit(): void {
    if(this.router.snapshot.url.toString()){
      this.sellRent = 2;
    }
    this.housingService.getAllProperties(this.sellRent).subscribe(
      data => {
        this.properties=data;
      });
  }
}
