import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular es una framwork holii ';
  nombre = "franco";
  edad = 24;  
  // definir interfases que tiene que tener un nombre, edad, trabajo, un bloque de datos que suiempre tenga las mismas caracteristicas. a ese bloque de informaicon vamos a definilas como intefases. 
  apellido : string = "Di leo"; 
  lenguajes : any =  [ "TYPE", "KDKF", "mkdsffd" ]

  suenio : boolean = true;  
  contador : number = 0; 
  nombre_usuario = "franco";
  apellido_usuario ="dileo";  

  comprobrarEdad (){
    if(this.edad > 18){
      // return this.nombre
      // funciones que son nuestro 
      return "La persona es mayor de edad"

    }else {
      return "la persona no es mayor de edad"

    }

  }
  sumar_numerito(){
    // que la persona clikeo el botton +1
    this.contador++


  }
  restar_numerito(){
    if(this.contador < 0){
      this.contador = 0; 
    }else {
      this.contador--; 
    }



  }

   
}


