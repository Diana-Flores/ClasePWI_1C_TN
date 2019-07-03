var express = require('express');
var router = express.Router();
var md5 = require('md5'); 
var uuid = require('uuid'); 

router.get('/', function(req, res, next) {
    res.render("login", {title:"Bienvenido"); 
});

router.post('/usuario', function(req, res, next) {
    var usuario =req.body.usuario;
    var password = req.body.password; 
    if(usuario =="franco" && password =="1234"){
        var informacion = {
            curso : "pwi_tn",
            dias : "lu-mi",
            alumnos: [
            {nombre: "franco", edad:25, foto:"1.png"}.
            {nombre: "cali", edad:25, foto:"2.png"}



        }
        res.render

    }else{
        res.render('/login', {mensaje: "usuario o contraseña incorrecta"});
        //lo llevamos al home 
    }
});



module.exports = router;
