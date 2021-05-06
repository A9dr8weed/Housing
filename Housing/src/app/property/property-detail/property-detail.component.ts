import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/Property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  property = new Property();

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _housingService: HousingService
  ) {}

  ngOnInit() {
    this.propertyId = +this._route.snapshot.params['id'];

    this._route.params.subscribe((params) => {
      this.propertyId = +params['id'];

      this._housingService
        .getProperty(this.propertyId)
        .subscribe((data: Property) => {
          this.property = data;
        });
    });
  }
}
