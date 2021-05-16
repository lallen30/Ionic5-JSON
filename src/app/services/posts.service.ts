import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [
    {
      id: '1',
      title: 'post 1',
      content: '<p>This is the content for the first post</p>'
    },
    {
      id: '2',
      title: 'post 2',
      content: '<p>This is the content for the second post</p>'
    },
    {
      id: '3',
      title: 'post 3',
      content: '<p>This is the content for the third post</p>'
    }
  ];

  constructor() { }

  getAllPosts() {
    return [...this.posts];
  }

  getPost(postId: string) {
    return {
      ...this.posts.find(post => {
        return post.id === postId;
      })
    };
  }
}
