import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/Property';
import { HousingService } from 'src/app/services/housing.service';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';

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
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true,
      },
    ];

    this.galleryImages = [
      {
        small: 'assets/images/gallery/inner-1.jfif',
        medium: 'assets/images/gallery/inner-1.jfif',
        big: 'assets/images/gallery/inner-1.jfif',
      },
      {
        small: 'assets/images/gallery/inner-2.jfif',
        medium: 'assets/images/gallery/inner-2.jfif',
        big: 'assets/images/gallery/inner-2.jfif',
      },
      {
        small: 'assets/images/gallery/inner-3.jfif',
        medium: 'assets/images/gallery/inner-3.jfif',
        big: 'assets/images/gallery/inner-3.jfif',
      },
      {
        small: 'assets/images/gallery/inner-4.jfif',
        medium: 'assets/images/gallery/inner-4.jfif',
        big: 'assets/images/gallery/inner-4.jfif',
      },
      {
        small: 'assets/images/gallery/inner-5.jfif',
        medium: 'assets/images/gallery/inner-5.jfif',
        big: 'assets/images/gallery/inner-5.jfif',
      },
    ];
  }
}
