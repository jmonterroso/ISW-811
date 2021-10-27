import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

interface IPost {
  title: string;
  body: string;
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
    body: '',
    title: '',
  };

  ngOnInit(): void {
    let that = this;
    this.activeRoute.params.subscribe((params) => {
      console.log(params, 'params');
      this.postService.getById(params['id']).subscribe((data) => {
        that.post = data;
        console.log(this.post, 'this.post');
      });
    });
  }
}
