import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserPost } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostHttpService {

  constructor(private readonly http: HttpClient) { }

  getAllPosts(): Observable<UserPost[]> {
    return this.http.get<UserPost[]>(`${environment.apiUrl}/post`);
  }
}
