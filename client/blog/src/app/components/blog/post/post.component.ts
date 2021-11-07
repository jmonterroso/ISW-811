import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export interface IComment {
  _id: string;
  name: string;
  content: string;
  createdAt: string;
}
interface IPost {
  _id: string;
  title: string;
  body: string;
  comments: IComment[];
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  constructor(
    private postService: PostService,
    private activeRoute: ActivatedRoute
  ) {}
  post: IPost = {
    _id: '',
    body: '',
    title: '',
    comments: [],
  };
  commentForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    content: new FormControl('', Validators.required),
  });
  // accesores, forma de acceder desde el template
  get name() {
    return this.commentForm.get('name');
  }
  get content() {
    return this.commentForm.get('content');
  }

  submitForm() {
    if (this.commentForm.valid) {
      console.log(this.commentForm.value, 'this.commentForm.value');
      this.postService
        .addComment(this.post._id, this.commentForm.value)
        .subscribe((data) => {
          this.post = data;
          this.commentForm.reset();
        });
    }
  }

  deleteComment(commentId: string) {
    this.postService
      .deleteComment(this.post._id, commentId)
      .subscribe((data) => {
        this.post = data;
      });
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      console.log(params, 'params');
      this.postService.getById(params['id']).subscribe((data) => {
        this.post = data;
        console.log(this.post, 'this.post');
      });
    });
  }
}
