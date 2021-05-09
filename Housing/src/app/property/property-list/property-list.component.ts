import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/IPropertyBase';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  Properties: Array<IPropertyBase> = [];
  SellRent = 1;

  City = '';
  SearchCity = '';
  SortByParam = '';
  SortDirection = 'asc';

  Today = new Date();

  constructor(
    private _housingService: HousingService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this._route.snapshot.url.toString()) {
      this.SellRent = 2; // означає що ми на rent-property URL, в іншому випадку на base URL
    }

    this._housingService.getAllProperties(this.SellRent).subscribe(
      (data) => {
        this.Properties = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onCityFilter() {
    this.SearchCity = this.City;
  }

  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
}
