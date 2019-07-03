var express = require("express"); 
// todo lo que est dentro de routes es javascript 
var mysql = require('mysql'); 
//mysql es un obejto creado pór nosotros que contiene todos los metodos d ela libreria de mysql 
// createConnection es un metodo que recibe un objeto por parametros. 

var dataBase = require("./BD/bd"); 
//SETEAMS A DONDE NOS CONCENCATSMOS 
var conexion = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : "",
    database : "peluqueria"
    // port : 3306 -> seria el puerto, es una puerta de acceso dond se comunica accede la infor. 
    
})
//ESTO SE HACE UNA SOLA VES, ES GLOBAL UNA VES CREADO PARA CUALQUIER CONSILTA. 
conexion.connect((error)=>{
    //la referencia de error 
    if(error){
        console.log(error); //nos dice exactamente que error tenemos 
        //console.log("error al conectar");
    }else {
        console.log("conectado")
    }
})

module.exports = conexion; 

//exportamos el objeto qu quermos que sea publico. 
// en cada modulo que creemos algo y quereamos que se comunicquen entren ellos, tenemosque aplicar eos 


