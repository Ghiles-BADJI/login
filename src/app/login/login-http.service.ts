import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginHttpService {

  constructor(private readonly http: HttpClient) { }

  login(payload: { email: string; password: string}): Observable<boolean> {
    return this.http.post<boolean>(`${environment.apiUrl}/user/login`, payload);
  }
}
