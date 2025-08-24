import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostoService {
  
  private readonly API_URL = 'http://localhost:8080/api/postos';
  
  constructor(private http: HttpClient){}

  public getPostos(): Observable<any>{
    return this.http.get<any>(this.API_URL);
  }
}
