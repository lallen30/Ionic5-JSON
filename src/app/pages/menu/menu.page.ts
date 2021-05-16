import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Post } from '../../interfaces/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  posts: Post[];

  constructor(private postsService: PostsService, public router: Router) {}

  ngOnInit() {
    this.posts = this.postsService.getAllPosts();
    console.log('posts: ', this.posts);
  }

  gotoPost(id: string){
    this.router.navigateByUrl('/post/' + id)
  }

}
