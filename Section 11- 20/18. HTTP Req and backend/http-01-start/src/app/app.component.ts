import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,OnDestroy{
  loadedPosts : Post[] = [];
  isFetching = false;
  error = null;
  private errorSub : Subscription;

  constructor(private http: HttpClient, private postsService : PostService) {}
  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.isFetching = true;
    this.postsService.fetchPost().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error= error.message;
    });
    }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content);
   
  }
 private fetchPosts(){
    this.isFetching = true
    
  }
  onFetchPosts() {
    // Send Http request
    this.postsService.fetchPost().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error= error.message;
    });
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe( () => {
      this.loadedPosts=[];
    });
  }
  onHandleError(){
    this.isFetching=false;
    this.error=null;
  }


 
}
