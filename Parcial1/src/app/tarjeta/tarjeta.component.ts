import { Component, OnInit } from '@angular/core';
import { ImportadorService } from '../importador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit{
  productos: any = [];
  constructor(private importador: ImportadorService, private router: Router) { }

  ngOnInit(): void {
    this.importador.getProducts().subscribe((data: any) => {
      this.productos = data;
    });
  }
  redirectToProductDetail(producto: any) {
    this.router.navigate([producto.nombre], { state: { producto } });
    console.log(producto);
  }

}
