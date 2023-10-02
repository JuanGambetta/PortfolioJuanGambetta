import { Component, OnInit } from '@angular/core';
import { SharedDataService } from './../shared-data.service';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {
  datosDeJuegos: any;
  ngOnInit() {
    this.sharedDataService.getData().subscribe(data => {
      // Aquí puedes usar los datos recibidos del Componente B
      this.datosDeJuegos = data;
    });
  }
  constructor(private sharedDataService: SharedDataService) { }
}
