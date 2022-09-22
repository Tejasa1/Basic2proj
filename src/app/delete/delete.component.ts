import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service: PostService) { }

  ngOnInit(): void {
  }

  did:number=0;
  

  deleteById(){
    this.service.deleteById(this.did);

  }

}
