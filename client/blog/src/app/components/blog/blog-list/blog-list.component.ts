import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  posts = [
    {
      title: 'My first Blog Post',
      body: 'Lorem ipsum dolor sit amet, consectetur adip',
      author: {
        name: 'John Smith',
      },
    },
    {
      title: 'My second Blog Post',
      body: 'Lorem ipsum dolor sit amet, consectetur adip',
      author: {
        name: 'Shakespeare',
      },
    },
    {
      title: 'My third Blog Post',
      body: 'Lorem ipsum dolor sit amet, consectetur adip',
      author: {
        name: 'P. Cohelo',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
