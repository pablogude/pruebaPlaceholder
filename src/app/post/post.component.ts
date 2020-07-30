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

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts/';
    this.apiService.post(this.baseUrl).subscribe(res => {
      console.log("El puto res", res);
    
    }); 
    
  }

}
