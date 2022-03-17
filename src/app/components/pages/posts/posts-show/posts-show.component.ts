import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../../../services/post.service';
import {PostModel} from '../../../../models/post.model';

@Component({
  selector: 'app-posts-show',
  templateUrl: './posts-show.component.html',
  styleUrls: ['./posts-show.component.css']
})
export class PostsShowComponent implements OnInit {
  post: PostModel;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router
    ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.postService.getPost(id).subscribe(
      (receivedPost: PostModel) => {
          this.post = receivedPost;
      },
      (error) => {
          console.log(error);
      },
      () => {
        // complete.
    });
  }
}
