import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Post } from '../post';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  public baseUrl: string; 
  public posts: Post[];

  constructor(
    private apiService: ApiService, 
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {

    this.baseUrl = `https://jsonplaceholder.typicode.com/posts/`;
    console.log("URL", this.baseUrl); 
    this.apiService.get(this.baseUrl).subscribe(res => {
      this.posts = res;
    });
    
    
  }


}
