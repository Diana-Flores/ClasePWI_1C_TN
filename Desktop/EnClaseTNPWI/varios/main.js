// prompt: ingresa un valor por pantalla
// parseInt: convierte un dato string a entero 
// prompt() llame a lineas de codigo. -> bloque de coodigo que se ejecuta cuando es llamado dentro de nuestro archivo  
//  las funciones se usan para dividir tareas. 
//  subidividir un problema grande, en funciones 
// function XX("argumento", "value")

function mensaje() {
    document.write("eeeey");
    document.write("*****");
}
// 
// function sumarNumeros ( num1, num2) {
    // alert(num1+num2)}

//  que necesita la funcion para resolver el problema 
//  si necesitan parametros que llegen de afuera, llamo a los parametros
//  un usuario ingresa a traves del prompt tres numeros 
//  los parametros van separados por comas  
//  los parametros pueden tener cualquier nombre  
function sumar(num1, num2, num3){
        var resultado = 0; // Por numeros random  
        var resultado = num1+num2+num3; // error num4 is not define 
        document.write("El resultado es: " + resultado); 
}

function dividir ( num1, num2){
    if(num2!=0){
        var resultado = 0; 
        var resultado = num1/num2; 
        // duemtn.wrtie(resultado)
        //document.write(num1/num2); 
    } else{
        document.write("No existe"); 
    }
    //NaN 
    }
var contador_num = 0; 
function contador(){
   // alert("Me apretaste")
   contador(contador_num++); 
}

// a un click a un doble click a un evento esta enfocado javascript  

function verificarTexto(){
    var nombre = document.getElementById("texto1").value;
    //  me devuelve la referencia qu esta dentro del id que le paso dentro de la propiedad. 
    //  objeto metodo  propiedad. 
    alert("Hola" + nombre); 
}