import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.page.html',
  styleUrls: ['./menu3.page.scss'],
})
export class Menu3Page implements OnInit {

  constructor(public http: HttpClient, private router: Router) { }

  posts: any;

  ngOnInit() {
    this.ReadJSONFromAssetsFolder();
  }

  ReadJSONFromAssetsFolder() {
    this.http.get('./assets/json/post.json').subscribe((data => {
      this.posts = <string>(data);
      console.log('posts: ', this.posts);
    }))
  }

  gotoPost(id: string){
    this.router.navigateByUrl('/post/' + id)
  }

}
