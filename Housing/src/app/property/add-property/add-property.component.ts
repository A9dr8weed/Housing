import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/IPropertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  /* @ViewChild('Form') addPropertyForm: NgForm; */
  @ViewChild('formTabs') formTabs: TabsetComponent;

  addPropertyForm: FormGroup;
  nextClicked: boolean;

  // Will come from masters
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];

  propertyView: IPropertyBase = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    PType: null,
    FType: null,
    BHK: null,
    BuiltArea: null,
    City: null,
    RTM: null,
  };

  constructor(private _fb: FormBuilder, private _router: Router) {}

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this._fb.group({
      BasicInfo: this._fb.group({
        SellRent: ['1', Validators.required],
        BHK: [null, Validators.required],
        PType: [null, Validators.required],
        FType: [null, Validators.required],
        Name: [null, Validators.required],
        City: [null, Validators.required],
      }),

      PriceInfo: this._fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required],
        CarpetArea: [null],
        Security: [null],
        Maintenance: [null],
      }),

      AddressInfo: this._fb.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null, Validators.required],
        LandMark: [null],
      }),

      OtherInfo: this._fb.group({
        RTM: [null, Validators.required],
        PossessionOn: [null],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null],
      }),
    });
  }

// #region <Getter Methods>
  // #region <FormGroups>
  get BasicInfo() {
    return this.addPropertyForm.controls.BasicInfo as FormGroup;
  }

  get PriceInfo() {
    return this.addPropertyForm.controls.PriceInfo as FormGroup;
  }

  get AddressInfo() {
    return this.addPropertyForm.controls.AddressInfo as FormGroup;
  }

  get OtherInfo() {
    return this.addPropertyForm.controls.OtherInfo as FormGroup;
  }
  // #endregion

  // #region <Form Controls>
  get SellRent() {
    return this.BasicInfo.controls.SellRent as FormControl;
  }

  get BHK() {
    return this.BasicInfo.controls.BHK as FormControl;
  }

  get PType() {
    return this.BasicInfo.controls.PType as FormControl;
  }

  get FType() {
    return this.BasicInfo.controls.FType as FormControl;
  }

  get Name() {
    return this.BasicInfo.controls.Name as FormControl;
  }

  get City() {
    return this.BasicInfo.controls.City as FormControl;
  }

  get Price() {
    return this.PriceInfo.controls.Price as FormControl;
  }

  get BuiltArea() {
    return this.PriceInfo.controls.BuiltArea as FormControl;
  }

  get CarpetArea() {
    return this.PriceInfo.controls.CarpetArea as FormControl;
  }

  get Security() {
    return this.PriceInfo.controls.Security as FormControl;
  }

  get Maintenance() {
    return this.PriceInfo.controls.Maintenance as FormControl;
  }

  get FloorNo() {
    return this.AddressInfo.controls.FloorNo as FormControl;
  }

  get TotalFloor() {
    return this.AddressInfo.controls.TotalFloor as FormControl;
  }

  get Address() {
    return this.AddressInfo.controls.Address as FormControl;
  }

  get LandMark() {
    return this.AddressInfo.controls.LandMark as FormControl;
  }

  get RTM() {
    return this.OtherInfo.controls.RTM as FormControl;
  }

  get PossessionOn() {
    return this.OtherInfo.controls.PossessionOn as FormControl;
  }

  get AOP() {
    return this.OtherInfo.controls.AOP as FormControl;
  }

  get Gated() {
    return this.OtherInfo.controls.Gated as FormControl;
  }

  get MainEntrance() {
    return this.OtherInfo.controls.MainEntrance as FormControl;
  }

  get Description() {
    return this.OtherInfo.controls.Description as FormControl;
  }

  //#endregion
//#endregion

  onBack() {
    this._router.navigate(['/']);
  }

  onSubmit() {
    this.nextClicked = true;

    if(this.allTabsValid()) {
      console.log('Congrats');
      console.log(this.addPropertyForm);
    } else {
      console.log("Please review the form and provice all valid entries");
    }
  }

  allTabsValid(): boolean {
    if (this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return false;
    }

    if (this.PriceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return false;
    }

    if (this.AddressInfo.invalid) {
      this.formTabs.tabs[2].active = true;
      return false;
    }

    if (this.OtherInfo.invalid) {
      this.formTabs.tabs[3].active = true;
      return false;
    }

    return true;
  }

  selectTab(nextTabId: number, isCurrentTabValid: boolean) {
    this.nextClicked = true;

    if (isCurrentTabValid) {
      this.formTabs.tabs[nextTabId].active = true;
    }
  }
}
