import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  submitted = false;

  form: FormGroup = new FormGroup({
    cpid: new FormControl(''),
    ctitle: new FormControl(''),
    cauthor: new FormControl(''),
    cdescription: new FormControl('')
  })

  constructor(private service:PostService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      pid: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required]

    })

  }


  get f(): {[key: string]:AbstractControl}{
    return this.form.controls;
  }



  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  cpid: any;
  ctitle:any;
  cauthor:any;
  cdescription:any;



  insertData() {

    let post: Post={
      "pid":this.cpid,
      "title":this.ctitle,
      "author":this.cauthor,
      "description":this.cdescription
    }
    this.service.insertDataPost(post);
    
  

  }


}
