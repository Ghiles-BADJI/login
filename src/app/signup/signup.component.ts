import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserHttpService } from '../user-http/user-http.service';
import { EmailExistsValidator } from './email-exists.validator';
import { matchingPasswordValidator } from './matching-password.validator';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email], EmailExistsValidator.createValidator(this.userHttpService)),
    password: new FormControl('', Validators.required),
    confirm_password: new FormControl('', Validators.required),
  }, matchingPasswordValidator('password', 'confirm_password'));

  constructor(private readonly userHttpService: UserHttpService, private readonly router: Router) { }

  ngOnInit(): void {

  }

  getValue() {
    if (this.formGroup.valid) {
      const payload = this.formGroup.value;
       
      this.userHttpService.signup(payload).subscribe(
        //this.userHttpService.signup2(this.formGroup.controls[email].value, this.formGroup.controls[password].value).subscribe(
        (newUser: User) => {
          if (newUser) {
            this.router.navigate(['/login']);
          }
        });
    }
  }
}


