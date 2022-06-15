import { Component, OnInit } from '@angular/core';
import { PostHttpService } from './post/post-http.service';
import { UserPost } from './post/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postList: UserPost[] = []

  constructor(private readonly posthttpservice : PostHttpService) { }

  ngOnInit(): void {
    this.posthttpservice.getAllPosts().subscribe((allPosts) => {
      this.postList = allPosts;
    });
  }

}
