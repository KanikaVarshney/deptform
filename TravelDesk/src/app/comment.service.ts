import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CommentComponent } from './comment/comment.component';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _http : HttpClient) { }
 baseUrl ="http://localhost:5161/api/Comments";
  GetComments() 
  {
    return this._http.get<CommentComponent[]>(this.baseUrl);
}
}

