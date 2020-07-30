import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LocalStorageService } from '../services/local-storage.service';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 listOnePost: boolean = false; 
 listPost: boolean = false;
 addPost: boolean = false; 
 isSearchable: boolean = false;
 isErasable: boolean = false; 
 postId:number; 
 formError:string = "";
 baseUrl: string; 
  constructor(
    private apiService: ApiService, 
    private localStorage: LocalStorageService,
  ) { }

  ngOnInit(): void {
  }

  public visibleList(){
    if(this.addPost||this.isSearchable||this.listOnePost) {
      this.addPost = false;
      this.isSearchable = false; 
      this.listOnePost = false 
    }
    this.listPost = !this.listPost; 
  }

  public visibleAddPost() {

    if(this.listPost||this.isSearchable) {
      this.listPost = false;
      this.isSearchable = false;  
    }
    this.addPost = !this.addPost; 
  }

  public makeItSearchable() {
    if(this.listPost||this.addPost) {
      this.listPost = false; 
      this.addPost = false; 
    }
    this.isSearchable = !this.isSearchable;
  }

  public makeItErasable() {
    if(this.isErasable) {
      this.isErasable = !this.isErasable; 
    }
  }

  public visibleDelete() {
    this.isErasable = !this.isErasable; 
  }

  public formSubmit() {
    if(
      !this.postId
    ) {
      return this.formError = "Required field.";
    }

    if(!this.formError && this.postId > 0) {
      this.deletePost();
    }
  }

  public formSubmitDelete() {
    if(
      !this.postId
    ) {
      return this.formError = "Required field.";
    }

    if(!this.formError && this.postId > 0) {
      this.searchPost();
    }
  }

  public searchPost() {

    this.localStorage.setToken(this.postId);
      this.baseUrl = `https://jsonplaceholder.typicode.com/posts/${this.postId}`;
    this.apiService.get(this.baseUrl).subscribe(res => {
      this.listOnePost = res;
    });

       
  }

  public deletePost() {
    this.baseUrl = `https://jsonplaceholder.typicode.com/posts/${this.postId}`;
    console.log("A COUSA ESTA DE BORRAR", this.baseUrl); 
    this.apiService.delete(this.baseUrl); 

  }



}
