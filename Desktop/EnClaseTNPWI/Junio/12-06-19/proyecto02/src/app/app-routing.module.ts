import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonajesComponent } from 'src/app/components/personajes/personajes.component';
import { PersonajeComponent } from 'src/app/components/personaje/personaje.component';

const routes: Routes = [
  //esto va a parar del router-outler dek app.component.html 
  {path:'personajes', component : PersonajesComponent},
  {path: 'personaje', component: PersonajeComponent}
  // cuando se cargue el path (ruta) personakjes: localhost:4200/personajes el componenet q se va a inyectar en el app.componenet.html es el PersonajesComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
