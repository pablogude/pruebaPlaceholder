import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule,} from "@angular/material/card";
import { HomeComponent } from './home/home.component';
import { ListOnePostComponent } from './list-one-post/list-one-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ListPostComponent,
    HomeComponent,
    ListOnePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
