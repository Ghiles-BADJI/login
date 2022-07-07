import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserPost } from '../model/post.model';
import { User } from '../model/user.model';
import { ProfilDto } from './profil-dto.model';


@Injectable({
  providedIn: 'root'
})
export class ProfilHttpService {

  constructor(private readonly http: HttpClient) { }

  getUserById(id: number): Observable<ProfilDto> {
    return this.http.get<ProfilDto>(`${environment.apiUrl}/user/${id}`);
  }

  updateProfil(payload: ProfilDto): Observable<ProfilDto> {
    let url = `${environment.apiUrl}/user/updateProfil`;
    console.log("Url", url)
    return this.http.put<ProfilDto>(url, payload);
  }

  
}
