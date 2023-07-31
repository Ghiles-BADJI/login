import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsHttpService {

  constructor(private readonly http: HttpClient) { }

  getAllUsers(userId: number): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/user/excludeUserId/${userId}`);
  }

  addFriendById(userId: number, friendId: number): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/user/${userId}/friend/${friendId}`, null);
  }
}
