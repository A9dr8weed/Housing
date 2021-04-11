import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId: number;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.propertyId = +this._route.snapshot.params['id'];

    this._route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
      }
    )
  }

  onSelectNext() {
    this.propertyId += 1;

    this._router.navigate(['property-detail', this.propertyId]);
  }

}
