import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { DetalleJugadorComponent } from './detalle-jugador/detalle-jugador.component';
import { AppComponent } from './app.component';
import { PlantelComponent } from './plantel/plantel.component';

const routes: Routes = [
  { path: '', component: TarjetaComponent },
  { path: 'plantel', component: PlantelComponent },
  { path: ':nombre', component: DetalleJugadorComponent },
  { path: '**', component: TarjetaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



