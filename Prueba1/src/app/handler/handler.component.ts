import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Result, Root } from '../manejadorJuegos';
import { SharedDataService } from './../shared-data.service';

@Component({
  selector: 'app-handler',
  templateUrl: './handler.component.html',
  styleUrls: ['./handler.component.css']
})
export class HandlerComponent implements OnInit {
  games: Root  | any = {}
  currentGame: Result | any = {}
  constructor(private http: HttpClient, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.http.get('https://api.rawg.io/api/games?key=cc44a92d7a7d4c80801f83b6124cb7cd').subscribe(data => {
    this.games = data;
    });
  }
  @Output() propagar = new EventEmitter<any>()
  toggleComponent(nuevoValor: any) {
    this.propagar.emit(nuevoValor);
  }
}
