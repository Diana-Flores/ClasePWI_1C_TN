import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// siempre que se travaje con formularios debo importarlo y hacerlo publico.  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// activos -> 
// reactivos -> se activa o s
// import {LoginComponent} form './login.componenet; 

@NgModule({
  // aqui accedo, y lo publico aca, apartte de importarlos arriba. hago publico para nuestrso ccomponentens y lo usemos en ellos. 
  declarations: [
    AppComponent
    // LoginComopnenet 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
