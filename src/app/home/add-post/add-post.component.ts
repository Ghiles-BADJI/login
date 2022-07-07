import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserPost } from '../post/post.model';
import { AddPostDto } from './add-post-dto.model';
import { AddPostHttpService } from './add-post-http.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    imageUrl: new FormControl(''),
    videoUrl: new FormControl(''),
    description: new FormControl('')
  });


  constructor(private readonly postHttpService: AddPostHttpService, private readonly router: Router, private readonly dialogRef: MatDialogRef<AddPostComponent>) { }

  ngOnInit(): void {
  }

  getValue() {
    if (this.formGroup.valid) {
      const user = JSON.parse(localStorage.getItem('user') || '{}')
      const payload: AddPostDto = {
        author: { id: user.id },
        description: this.formGroup.value.description,
        title: this.formGroup.value.title,
        imageUrl: this.formGroup.value.imageUrl,
        videoUrl:  undefined,
      };


      this.postHttpService.addPost(payload).subscribe(
        (newPost: UserPost) => {
          if (newPost) {
            this.dialogRef.close({ refresh: true });
          }
        });
    }
  }

}
