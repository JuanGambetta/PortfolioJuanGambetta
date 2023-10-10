import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

const routes: Routes = [
  { path: '', component: TarjetaComponent },
  { path: ':nombreProducto', component: DetalleProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
