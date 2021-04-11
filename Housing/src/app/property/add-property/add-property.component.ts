import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm: NgForm;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onBack() {
    this._router.navigate(['/']);
  }

  onSubmit() {
    console.log('Congrats');
    console.log(this.addPropertyForm);
  }
}
