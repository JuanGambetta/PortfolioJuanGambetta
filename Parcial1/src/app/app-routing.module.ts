import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleJugadorComponent } from './detalle-Jugador/detalle-jugador.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: TarjetaComponent },
  { path: ':nombreJugador', component: DetalleJugadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
