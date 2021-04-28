import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-upgradebusiness',
  templateUrl: './upgradebusiness.component.html',
  styleUrls: ['./upgradebusiness.component.css']
})
export class UpgradebusinessComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  typeCtrl = new FormControl();
  filteredTypes: Observable<string[]>;
  types: string[] = ['shop'];
  allTypes: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('typeInput') typeInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;




  states: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry',
  ];

  // .......chnage to true
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  hide = true;
  maxDate: Date;
  
  constructor(private _formBuilder: FormBuilder,) 
  { this.filteredTypes = this.typeCtrl.valueChanges.pipe(
      startWith(null),
      map((type: string | null) => type ? this._filter(type) : this.allTypes.slice()))
 }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() + 18);
  }
 add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our type
    if ((value || '').trim()) {
      this.types.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.typeCtrl.setValue(null);
  }

  remove(type: string): void {
    const index = this.types.indexOf(type);

    if (index >= 0) {
      this.types.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.types.push(event.option.viewValue);
    this.typeInput.nativeElement.value = '';
    this.typeCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTypes.filter(type => type.toLowerCase().indexOf(filterValue) === 0);
  }
}
