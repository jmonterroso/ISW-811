import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  posts = <any>[];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.get().subscribe((posts)=>{this.posts  = posts});
    console.log("paso por aca");
    console.log(this.posts);
  }
}
