import { Component , NgModule, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class  CommentComponent implements OnInit {
  
  constructor(private _commentService :CommentService) {
   
 
   
  }
  comments : CommentComponent[]=[];
  ngOnInit(): void {
     this._commentService.GetComments().subscribe(res=>
       {
       console.log(res)
       this.comments= res;
       console.log(this.comments)
     });
    }
  }
