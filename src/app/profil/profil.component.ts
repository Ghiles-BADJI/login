import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { ProfilDto } from './profil-dto.model';
import { ProfilHttpService } from './profil-http.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  form: FormGroup = new FormGroup({
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    dateOfBirth: new FormControl(''),
  });

  userById: ProfilDto | undefined

  constructor(private readonly profilHttpService: ProfilHttpService, private readonly router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getUserById();
  }

  private getUserById() {

    const user = JSON.parse(localStorage.getItem('user') || '{}')
    console.log('userid', user)
    this.profilHttpService.getUserById(user.id).subscribe((User) => {
      console.log("user", User)
      this.userById = User;
      this.form.setValue({
        lastName: User.lastName,
        firstName: User.firstName,
        dateOfBirth: User.dateOfBirth
      })

    });

  }


  updateUser() {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const payload: ProfilDto = {
      id: user.id,
      lastName: this.form.value.lastName,
      firstName: this.form.value.firstName,
      dateOfBirth: this.form.value.dateOfBirth,
    };

    this.profilHttpService.updateProfil(payload).subscribe( () => {
      
        this._snackBar.open("Profil modifié", "Fermer")}
      
    );
  }
}
