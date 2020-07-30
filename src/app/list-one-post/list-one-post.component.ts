import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ApiService } from '../services/api.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-list-one-post',
  templateUrl: './list-one-post.component.html',
  styleUrls: ['./list-one-post.component.css']
})
export class ListOnePostComponent implements OnInit {

  
  post: Post; 
  postId: string = "";
  public baseUrl: string; 

  constructor(
    private apiService: ApiService, 
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {

    if(localStorage) {
      this.postId = this.localStorage.getToken(); 
      this.baseUrl = `https://jsonplaceholder.typicode.com/posts/${this.postId}`;
    }

    this.localStorage.removeToken(); 
   
    this.apiService.get(this.baseUrl).subscribe(res => {
      this.post = res;
    });

    
  }

}
