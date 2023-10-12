import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  constructor(private http: HttpClient) { }
  private link = '../assets/lista.json';
  getLista(): Observable<any> {
    return this.http.get(this.link);
  }


}
