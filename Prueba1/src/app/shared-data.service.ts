import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  showComponent: boolean = false;
  toggleComponent() {
    this.showComponent = !this.showComponent;
  }
  getVariable(): boolean {
    return this.showComponent;
  }


  
  private dataSubject = new BehaviorSubject<any>(null);
  // Método para emitir datos
  sendData(data: any) {
    this.dataSubject.next(data);
  }
  // Método para recibir datos como un Observable
  getData(): Observable<any> {
    return this.dataSubject.asObservable();
  }
  constructor() { }
}
