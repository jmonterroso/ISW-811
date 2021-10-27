import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

//URL del API para la gestión de posts
const AUTH_API = 'http://localhost:8989/posts/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  //Se crea un método get para llamar todos los posts del blog
  get(): Observable<any> {
    return this.http.get(AUTH_API , httpOptions);
  }


}
