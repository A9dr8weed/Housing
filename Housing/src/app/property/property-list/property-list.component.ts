import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {

  Properties: Array<IProperty>;
  SellRent = 1;

  constructor(private _housingService: HousingService, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    if (this._route.snapshot.url.toString()) {
      this.SellRent = 2; // означає що ми на rent-property URL, в іншому випадку на base URL
    }

    this._housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.Properties = data;
      },
      error =>{
        console.log(error);
      }
    );
  }

}
