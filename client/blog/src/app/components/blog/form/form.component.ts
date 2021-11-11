import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  postForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    body: new FormControl('', Validators.required),
  });

  constructor(
    private postService: PostService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  editMode = false;
  post: any = {};

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      if (params.id) {
        this.editMode = true;

        this.postService.getById(params.id).subscribe((data) => {
          this.post = data;
          this.postForm.setValue({
            title: data.title,
            body: data.body,
          });
        });
      }
    });
  }

  navigateToList() {
    this.router.navigate(['/dashboard/blog/list']);
  }

  submitForm() {
    if (this.postForm.valid) {
      if (this.editMode) {
        this.postService
          .edit(this.post._id, this.postForm.value)
          .subscribe((data) => {
            this.navigateToList();
          });
      } else {
        this.postService.create(this.postForm.value).subscribe((data) => {
          this.navigateToList();
        });
      }
    }
  }
}
