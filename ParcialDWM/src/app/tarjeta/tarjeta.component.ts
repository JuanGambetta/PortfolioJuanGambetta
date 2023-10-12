import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListadoService } from '../listado.service';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  constructor(private router: Router) { }

  textoNombre: string = '';
  textoPosicion: string = '';
  textoImagen: string = '';
  textoInput: any;
  redirectToPlayerDetail(jugador: any) {
    this.router.navigate([jugador.nombre], { state: { jugador } });
    console.log(jugador);
  }
  agregarJugador() { 
    if (this.listaJugadores.jugadores.length < 23) {
      console.log(this.listaJugadores.jugadores)
      this.textoNombre = (<HTMLInputElement>document.getElementById("nombre")).value;
      this.textoPosicion = (<HTMLInputElement>document.getElementById("posicion")).value;
      this.textoImagen = (("../../assets/" + (<HTMLInputElement>document.getElementById("imagen")).value)+ ".jpg");
      this.textoInput = {"nombre":this.textoNombre,"posicion":this.textoPosicion, "imagen":this.textoImagen};
      console.log(this.textoInput);
      this.listaJugadores.jugadores.push(this.textoInput);
    } else {
    alert("No se pueden agregar más jugadores");
    }
    if (this.listaJugadores.jugadores.length == 23) {
      (<HTMLInputElement>document.getElementById("nombre")).disabled = true;
      (<HTMLInputElement>document.getElementById("posicion")).disabled = true;
      (<HTMLInputElement>document.getElementById("imagen")).disabled = true;
      alert("Se han agregado 23 jugadores, el plantel está completo");
    }
  }
  listaJugadores = {"jugadores":
  [{"nombre":"Luis Suarez","posicion":"delantero", "imagen":"../../assets/foto1.jpg"},
  {"nombre":"Sergio Rochet","posicion":"golero", "imagen":"../../assets/foto2.jpg"},
  {"nombre":"Federico Valverde","posicion":"mediocampista", "imagen":"../../assets/foto3.jpg"},
  {"nombre":"Facundo Torres","posicion":"mediocampista", "imagen":"../../assets/foto4.jpg"},
  {"nombre":"Facundo Pellistri","posicion":"mediocampista", "imagen":"../../assets/foto5.jpg"},
  {"nombre":"Diego Forlan","posicion":"delantero", "imagen":"../../assets/foto6.jpg"},
  {"nombre":"Diego Godin","posicion":"defensa", "imagen":"../../assets/foto7.jpg"},
  {"nombre":"Edinson Cavani","posicion":"delantero", "imagen":"../../assets/foto8.jpg"},
  {"nombre":"Luis Suarez","posicion":"delantero", "imagen":"../../assets/foto9.jpg"},
  {"nombre":"Sergio Rochet","posicion":"golero", "imagen":"../../assets/foto10.jpg"},
  {"nombre":"Federico Valverde","posicion":"mediocampista", "imagen":"../../assets/foto11.jpg"},
  {"nombre":"Facundo Torres","posicion":"mediocampista", "imagen":"../../assets/foto12.jpg"},
  {"nombre":"Facundo Pellistri","posicion":"mediocampista", "imagen":"../../assets/foto13.jpg"},
  {"nombre":"Diego Forlan","posicion":"delantero", "imagen":"../../assets/foto14.jpg"},
  {"nombre":"Diego Godin","posicion":"defensa", "imagen":"../../assets/foto15.jpg"},
  {"nombre":"Edinson Cavani","posicion":"delantero", "imagen":"../../assets/foto16.jpg"},
  {"nombre":"Luis Suarez","posicion":"delantero", "imagen":"../../assets/foto17.jpg"},
  {"nombre":"Sergio Rochet","posicion":"golero", "imagen":"../../assets/foto18.jpg"},
  {"nombre":"Federico Valverde","posicion":"mediocampista", "imagen":"../../assets/foto19.jpg"},
  {"nombre":"Facundo Torres","posicion":"mediocampista", "imagen":"../../assets/foto20.jpg"},
  {"nombre":"Facundo Pellistri","posicion":"mediocampista", "imagen":"../../assets/foto21.jpg"},]
}
}
