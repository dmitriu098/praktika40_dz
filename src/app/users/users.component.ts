import { Component, OnInit } from '@angular/core';
import {JsonapiService} from '../jsonapi.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any = [];
  constructor(private jsonapiService:JsonapiService ) { }

  ngOnInit() {
    this.jsonapiService.getUsers().subscribe(data => this.users = data);
  }

}
