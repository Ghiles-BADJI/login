import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl, ValidatorFn  } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup = this.fb.group({
    email : new FormControl('', [Validators.required, Validators.email]),
    password: ['', Validators.required],
  });



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  getValue() {
    if (this.formGroup.valid)
      console.warn(this.formGroup.value);
  }
}
