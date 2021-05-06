import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NgxGalleryImage,
  NgxGalleryOptions,
  NgxGalleryAnimation,
} from '@kolkov/ngx-gallery';
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

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _housingService: HousingService
  ) {}

  ngOnInit() {
    this.propertyId = +this._route.snapshot.params['id'];

    this._route.data.subscribe((data: Property) => {
      this.property = data['prp'];
    });

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
      },
    ];

    this.galleryImages = [
      {
        small: 'assets/images/detailImg/inner.jpg',
        medium: 'assets/images/detailImg/inner.jpg',
        big: 'assets/images/detailImg/inner.jpg',
      },
      {
        small: 'assets/images/detailImg/inner-5.jpg',
        medium: 'assets/images/detailImg/inner-5.jpg',
        big: 'assets/images/detailImg/inner-5.jpg',
      },
      {
        small: 'assets/images/detailImg/inner-2.jpg',
        medium: 'assets/images/detailImg/inner-2.jpg',
        big: 'assets/images/detailImg/inner-2.jpg',
      },
      {
        small: 'assets/images/detailImg/inner-3.jpg',
        medium: 'assets/images/detailImg/inner-3.jpg',
        big: 'assets/images/detailImg/inner-3.jpg',
      },
      {
        small: 'assets/images/detailImg/inner-4.jpg',
        medium: 'assets/images/detailImg/inner-4.jpg',
        big: 'assets/images/detailImg/inner-4.jpg',
      },
    ];
  }
}
