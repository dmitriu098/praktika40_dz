import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Post} from './post';
import {JsonapiService} from '../jsonapi.service';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {

  post: Post;
  username: string;

  constructor(private jsonapi:JsonapiService,  private route:ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(({id}) =>
                this.jsonapi.getPostsId(id).subscribe((post:Post)=> {

                  this.post = post;

                  this.jsonapi.getUsersId(post.userId).subscribe((user:any)=>this.username = user.username);
                })
  );


  }

}
