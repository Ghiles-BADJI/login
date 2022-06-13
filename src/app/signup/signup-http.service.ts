import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignupHttpService {

  constructor(private readonly http: HttpClient) { }

  signup(payload: { email: string; password: string; }): Observable<User> {
    console.log('payload', payload)
    return this.http.post<User>(`${environment.apiUrl}/user/signup`, payload);
  }

  checkIfEmailExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${environment.apiUrl}/user/email-exist/${email}`);
  }
}
