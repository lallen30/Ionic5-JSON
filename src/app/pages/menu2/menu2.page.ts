import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.page.html',
  styleUrls: ['./menu2.page.scss'],
})
export class Menu2Page implements OnInit {

  posts: any;

  constructor(private router: Router) { }

  ngOnInit() {
    fetch('./assets/json/post.json').then(res => res.json()).then(json => {
      console.log('posts: ', json);
      this.posts = json;
    })
  }

  gotoPost(id: string){
    this.router.navigateByUrl('/post/' + id)
  }
}
