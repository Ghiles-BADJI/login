import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserPost } from '../post/post.model';
import { AddPostDto } from './add-post-dto.model';

@Injectable({
  providedIn: 'root'
})
export class AddPostHttpService {

  constructor(private readonly http: HttpClient) { }

  addPost(payload: AddPostDto): Observable<UserPost> {
    let url = `${environment.apiUrl}/post`;
    console.log("Url", url)
    return this.http.post<UserPost>(url, payload);
  }
}
