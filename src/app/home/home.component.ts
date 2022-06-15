import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPostComponent } from './add-post/add-post.component';
import { PostHttpService } from './post/post-http.service';
import { UserPost } from './post/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postList: UserPost[] = []

  constructor(private readonly posthttpservice : PostHttpService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.posthttpservice.getAllPosts().subscribe((allPosts) => {
      this.postList = allPosts;
    });
  }

  addPost(){
    this.dialog.open(AddPostComponent, {
      width: '250px'
    })
  }
}
