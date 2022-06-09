import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private readonly http: HttpClient) { }

  login(payload: { email: string; password: string}): Observable<boolean> {
    return this.http.post<boolean>(`${environment.apiUrl}/user/login`, payload);
  }

  signup(payload: { email: string; password: string; }): Observable<User> {
    console.log('payload', payload)
    return this.http.post<User>(`${environment.apiUrl}/user/signup`, payload);
  }

  checkIfEmailExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${environment.apiUrl}/user/email-exist/${email}`);
  }

  
}
