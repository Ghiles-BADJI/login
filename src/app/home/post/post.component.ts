import { Component, Input, OnInit } from '@angular/core';
import { PostHttpService } from './post-http.service';
import { UserPost } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 
  @Input() post!: UserPost

  constructor() { }

  ngOnInit(): void {
    
  }

}
