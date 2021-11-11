import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private postService: PostService) {}

  posts: any = [];

  ngOnInit(): void {
    this.postService.get().subscribe((posts) => {
      this.posts = posts;
    });
  }
  delete(id: string): void {
    if (confirm('¿Esta seguro que quiere borrar este post?')) {
      this.postService.delete(id).subscribe((res: any) => {
        this.posts = this.posts.filter((post: any) => post._id !== id);
      });
    }
  }
}
