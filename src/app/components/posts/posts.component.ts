import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from 'src/app/models/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  api: string = 'https://jsonplaceholder.typicode.com/posts';
  data = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    const promise = new Promise<void>((resolve, reject) => {
      const apiURL = this.api;
      this.http.get<Post[]>(apiURL).subscribe({
        next: (res: any) => {
          this.data = res.map((res: any) => {
            return new Post(res.userId, res.id, res.title, res.body);
          });
          resolve();
        },
        error: (err: any) => {
          reject(err);
        },
        complete: () => {
          console.log('complete');
        },
      });
    });
    return promise;
  }


}

