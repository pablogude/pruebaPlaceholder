import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public baseUrl: string; 
  newPost : Post; 
  postId: string;
  formError : string = "";  
  public body = {
    id: "",
    title: "",
    body: "",
    userId: ""
  }

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    
  }

  public formSubmit() {
    if(
      !this.body.id ||
      !this.body.title ||
      !this.body.body ||
      !this.body.userId
    ) {
      return this.formError = "All fields are required";
    }

    if(!this.formError) {
      this.createPost();
    }
  }

  public createPost() {
    console.log("CREANDOOOO0", this.body);
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts/';
    this.apiService.post(this.baseUrl,this.body).subscribe(res => {
    }); 
  }

  public updatePost() {
    if(
      !this.body.id ||
      !this.body.title ||
      !this.body.body ||
      !this.body.userId
    ) {
      return this.formError = "All fields are required";
    }

    if(!this.formError) {
      this.baseUrl = `https://jsonplaceholder.typicode.com/posts/${this.body.id}`;
      this.apiService.put(this.baseUrl,this.body).subscribe(res => {
      }); 
    }
  }

}
