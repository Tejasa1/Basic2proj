import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private service : PostService) { }

  ngOnInit(): void {
  }

  posts : any;

  getAll():any{
    this.service.getAll()
    .subscribe( (response: any) =>{
      this.posts=response;
      console.log(response);
    }
    );
  }


}
