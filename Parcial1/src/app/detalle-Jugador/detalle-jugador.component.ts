import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-jugador',
  templateUrl: './detalle-jugador.component.html',
  styleUrls: ['./detalle-jugador.component.css']
})
export class DetalleJugadorComponent implements OnInit {
  nombreJugador: string = "";

  constructor(private route: ActivatedRoute, private activatedRoute: ActivatedRoute) {}
  jugador: any;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.nombreJugador = params['nombreJugador'];
    })
    this.jugador = history.state.jugador;
    console.log(this.jugador);
  }
}
