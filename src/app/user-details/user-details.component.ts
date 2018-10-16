import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {JsonapiService} from '../jsonapi.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:any;
  constructor(private route: ActivatedRoute,  private jsonapi: JsonapiService) { }

  ngOnInit() {
    this.route.params.subscribe(({id}) => this.jsonapi.getUsersId(id).subscribe(user =>this.user = user));
  }

}
