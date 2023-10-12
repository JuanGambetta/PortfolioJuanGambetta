import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { DetalleJugadorComponent } from './detalle-jugador/detalle-jugador.component';
import { PlantelComponent } from './plantel/plantel.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    DetalleJugadorComponent,
    PlantelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
