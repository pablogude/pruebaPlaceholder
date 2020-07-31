import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  public baseUrl: string; 
  formError: string = "";
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
      this.updatePost();
    }
  }
  public updatePost() {
    this.baseUrl = `https://jsonplaceholder.typicode.com/posts/${this.body.id}`;
    this.apiService.put(this.baseUrl,this.body).subscribe(res => {
    }); 
  }

}
