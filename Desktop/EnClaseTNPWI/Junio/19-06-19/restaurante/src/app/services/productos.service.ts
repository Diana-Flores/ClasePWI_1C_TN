import { Injectable } from '@angular/core';
import { Comida } from 'src/app/models/comida.models';

@Injectable({
  providedIn: 'root'
  }) // un servicio esta dentro de otro. 


export class ProductosService {
  // VAMOS A CREAR LA CARTA DE PRODUCTOS
 // cuando vas escribiendo "Comida" en esta propuedad, automaticamente se declara esto import { Comida } from 'src/app/models/comida.models';
 private carta : Comida [] = [ 
  new Comida ('Ensalada','lechuga tomate y huevo','https://www.lanacion.com.ar/espectaculos/series-de-tv/ahora-ensenan-filosofia-a-partir-de-homero-simpson-nid1959551'),
  new Comida ('Hamburguesa', 'pan y carne','https://articulo.mercadolibre.com.ar/MLA-618665280-hamburguesas-rancho-alto-70g-x-72u-panaderezo-_JM')

 ]//todo lo que esta en export, nos vamos a cargar nosotros, sino que vamos a recibir desde aqui la infor. de node
getCarta(){
  return this.carta.slice(); 
  // esto me devuelve toda la carta, es decir todo el array. 
}

getProducto(index: number) {
  return this.carta[index]; 

}

}
