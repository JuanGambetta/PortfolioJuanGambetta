import { SharedDataService } from './shared-data.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valorCompartido: boolean = true;
  juego: any = {};
  actualizarVariableEnPadre(nuevoValor: any) {
    console.log("llego al 1", nuevoValor)
    this.valorCompartido = Boolean(nuevoValor[0])
    console.log(nuevoValor[0], this.valorCompartido)
    this.juego = nuevoValor[1]
  }

  constructor(private sharedDataService: SharedDataService) {
    this.valorCompartido = sharedDataService.getVariable();
    console.log(this.valorCompartido)
  }
  title = 'Prueba1';
}

