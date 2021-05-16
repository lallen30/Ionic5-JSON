import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  id: string;
  post: Object;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public postsServices: PostsService
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data => {
      this.id = data.id;
      console.log('id: ', this.id);
      this.post = this.postsServices.getPost(this.id);
      console.log('post: ', this.post);
    }));
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
