import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PostsComponent } from './posts/posts.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { ErrorComponent } from './error/error.component';
import { CommentsComponent } from './comments/comments.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostsDetailsComponent},
  {path: 'posts/:id/comments', component: CommentsComponent},
  {path: '**', component: ErrorComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserDetailsComponent,
    PostsComponent,
    PostsDetailsComponent,
    ErrorComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
