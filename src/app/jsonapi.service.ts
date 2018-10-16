import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JsonapiService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }

  getUsersId(id){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getPosts(){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

  getPostsId(id){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  getComments(id){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }

  deletePost(id){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
