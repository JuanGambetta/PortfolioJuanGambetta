import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  nombreProducto: string = "";

  constructor(private route: ActivatedRoute, private activatedRoute: ActivatedRoute) {}
  producto: any;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.nombreProducto = params['nombreProducto'];
    })
    this.producto = history.state.producto;
    console.log(this.producto);
  }
}
