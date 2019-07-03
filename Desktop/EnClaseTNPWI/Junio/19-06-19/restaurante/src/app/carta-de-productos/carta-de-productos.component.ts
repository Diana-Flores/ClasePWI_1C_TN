import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-carta-de-productos',
  templateUrl: './carta-de-productos.component.html',
  styleUrls: ['./carta-de-productos.component.css']
})
export class CartaDeProductosComponent implements OnInit {

  constructor(private productoService : ProductosService) { }

  ngOnInit() {
  }

}
