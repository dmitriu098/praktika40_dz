import { Component, OnInit } from '@angular/core';
import {JsonapiService} from '../jsonapi.service';
import { ActivatedRoute } from '@angular/router';
import {Comment} from './comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comment: Comment;
  text: string;

  constructor(private jsonapi: JsonapiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(({id}) =>
      this.jsonapi.getComments(id).subscribe((comment: Comment ) => {

        this.comment = comment;

        this.jsonapi.getPostsId(comment.postId).subscribe((text: any) => this.text = text.name);
      })
    );


  }

}



