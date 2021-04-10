import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {

  Properties: any;

  constructor(private _housingService: HousingService) { }

  ngOnInit(): void {
    this._housingService.getAllProperties().subscribe(
      data => {
        this.Properties = data;
      },
      error =>{
        console.log(error);
      }
    );
  }

}
