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
  buscarJuego: string = '';
  actualizarVariableEnPadre(nuevoValor: any) {
    if (nuevoValor !== undefined) {
      this.valorCompartido = true
    } else {
      this.valorCompartido = false
    }
    this.juego = nuevoValor
  }
  buscarjuego(textoInput: any) {
    this.buscarJuego = textoInput;
  }

  constructor(private sharedDataService: SharedDataService) {
    this.valorCompartido = sharedDataService.getVariable();
  }
  title = 'Prueba1';
}

