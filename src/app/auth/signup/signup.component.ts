import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  // ....... states in service component
states :string[] = [];


  // .......chnage to true
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  hide = true;
  maxDate: Date;
  constructor(private _formBuilder: FormBuilder,
    private authService: AuthService) {}

  

  ngOnInit() {
    this.states = this.authService.states;
    this.firstFormGroup = this._formBuilder.group({
  
      fullname: ['', Validators.required],
      birthdate: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', Validators.required],
      gender: ['', Validators.required],

      
    });
    this.secondFormGroup = this._formBuilder.group({
      phoneno: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      refralno: ['' ,Validators.required],
    });
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() + 18);
  }

  onSubmit() {
    console.log(this.firstFormGroup);
    console.log(this.thirdFormGroup);

    console.log(this.secondFormGroup);

  }
}
