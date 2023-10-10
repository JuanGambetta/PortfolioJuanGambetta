import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImportadorService{

  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get<any[]>('https://mocki.io/v1/309f1705-7423-440e-afb2-4535bab4ddbd');
  }
}
