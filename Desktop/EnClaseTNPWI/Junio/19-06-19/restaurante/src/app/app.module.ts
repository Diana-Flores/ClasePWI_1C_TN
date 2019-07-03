import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartaDeProductosComponent } from './carta-de-productos/carta-de-productos.component';
import { ProductosComponent } from './carta-de-productos/productos/productos.component';
import { ProductosService } from 'src/app/services/productos.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartaDeProductosComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]

})
export class AppModule { }

// el hitter : es la barra de navegacion 
