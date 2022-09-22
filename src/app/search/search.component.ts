import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service : PostService) { }

  ngOnInit(): void {
  }

  spid:number=0;
  posts:any;

  searchById(){
    this.service.searchById(this.spid)
    .subscribe(
      response =>{
        this.posts=response;
        console.log(response);
      }
    );
  }

}
