import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

import { LoginHttpService } from './login-http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  formGroup: FormGroup = this.fb.group({
    email : new FormControl('', { validators: [Validators.required, Validators.email], asyncValidators: []} ),
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private readonly userHttpService: LoginHttpService, private readonly router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  getValue() {
    if (this.formGroup.valid) {
      const payload = this.formGroup.value;
      this.userHttpService.login(payload).subscribe(
        (user: User) => { // tout se passe bien
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          console.log('userlogin',user)
          this.router.navigate(['/home']);
        }
      },
      (err) => { // retour erreur
        console.error('error', err)
          this._snackBar.open(err.error.message, 'Fermer');
      });


       // TODO handle observable errors with rxjs
      // this.userHttpService.login(payload).pipe(
      //   tap(() => this.router.navigate(['/home'])), // navigue vers la page d'accueil dans le cas de succès de l'appel HTTP
      //   catchError((error) => { // gestion d'erreur
      //     this._snackBar.open(error.error.message, 'Fermer'); // ouvre une snack bar dans le cas d'une erreur
      //     return EMPTY;
      //   })
      // ).subscribe(); // déclenche l'opération asynchrone
    }
    
   
  }

}
