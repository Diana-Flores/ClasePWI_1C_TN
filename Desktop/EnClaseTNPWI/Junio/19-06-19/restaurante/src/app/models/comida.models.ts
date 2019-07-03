export class Comida {
    // es lo que definimos nosotros, como va ser la estructura de comida
    public nombre : string; 
    public descripcion : string;
    public rutaImagen : string; 

    constructor(nombre1: string, desc: string, rutaImagen1 : string ){
        // el contructor va recibir lo que nos mande la fente
        this.nombre = nombre1; 
        this.descripcion = desc; 
        this.rutaImagen = rutaImagen1; 


    }
}
