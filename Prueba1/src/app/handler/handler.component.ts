import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input , Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Result, Root } from '../manejadorJuegos';
import { SharedDataService } from './../shared-data.service';

@Component({
  selector: 'app-handler',
  templateUrl: './handler.component.html',
  styleUrls: ['./handler.component.css']
})
export class HandlerComponent implements OnInit, OnChanges {
  games: Root  | any = {}
  currentGame: Result | any = {}
  constructor(private http: HttpClient, private sharedDataService: SharedDataService) { }
  @Input() datosDelPadre: any;
  @Output() propagar = new EventEmitter<any>()
  ngOnChanges(changes: SimpleChanges) {
    // Este método se ejecutará cuando cambien las propiedades de entrada
    // Puedes realizar acciones aquí cuando lleguen los datos del padre
    if (changes['datosDelPadre']) {
      this.filtrarJuegos(this.datosDelPadre);
    }
  }
  ngOnInit(): void {
    this.http.get('https://api.rawg.io/api/games?key=cc44a92d7a7d4c80801f83b6124cb7cd').subscribe(data => {
    this.games = data;
    });
  }
  juegosFiltrados: any = []
  toggleComponent(nuevoValor: any) {
    this.propagar.emit(nuevoValor);
  }
  filtrarJuegos(datosDelPadre: any) {
    this.datosDelPadre = String(datosDelPadre)
    this.games.results.filter((game: any) =>{
      if (game.name.toLowerCase().includes(this.datosDelPadre.toLowerCase())) {
        this.juegosFiltrados.push(game)
      }
    });
    console.log("resultado ",this.juegosFiltrados)
  }
}
