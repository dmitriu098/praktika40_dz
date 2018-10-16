import { Component, OnInit } from '@angular/core';
import {JsonapiService} from '../jsonapi.service';




@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any;

  constructor(private jsonApi: JsonapiService) { }

  ngOnInit() {
    this.jsonApi.getPosts().subscribe(post => this.posts = post);


  }

}
