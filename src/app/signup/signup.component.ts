import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { matchingPasswordValidator } from './matching-password.validator';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required),
  }, matchingPasswordValidator('password', 'confirm_password'));

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   
  }

  getValue() {
    if (this.formGroup.valid)
      console.warn(this.formGroup.value);
  }
}


