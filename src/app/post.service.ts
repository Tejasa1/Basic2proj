import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient : HttpClient) { }


  getAll():any{
    return this.httpClient.get("http://localhost:8089/posts/show");
  }

  insertDataPost(post:any){
    this.httpClient.post("http://localhost:8089/posts/add",post)
    .subscribe(
      response =>{
        console.log(response);
      }
    );
    // .subscribe(
    //   response => {
    //     console.log(response);
    //   },
    //   error => {
    //     console.log(error);
    //   });

  }

  searchById(id:number){
    return this.httpClient.get("http://localhost:8089/posts/"+id)
  }


  deleteById(id:number){
    this.httpClient.delete("http://localhost:8089/posts/delete/"+id)
    .subscribe(
      response => {
        console.log(response);
      }
    );
  }



}
