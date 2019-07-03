var express = require('express');
var router = express.Router();
var md5 = require('md5'); 
var db =  require('./BD/bd');


router.post("/", (req,res)=>{
    var datos = {
        usuario: req.body.usuario,
        password: md5(req.body.password)
    }
    // bd.query("´select id_usuario from usuarios where usuarios=´" VER TIENE QUE QUERY IR A PROMOCIONES 
    bd.query("´select id_usuario from usuarios where usuarios=´"+datos.usuario+"and password"+datos.password+"", (err,rows)=>{
        if(err){
            console.log(err); 
        } else {
            console.log(rows); 
            if(rows.lenght>0){
                req.session.usuario = rows[0].id_usuario; //preguntar
                res.redirect("/promociones", {datos:rows}); 

            }else{
                res.render("/login", {mensaje: "Usuario y constraseña incorrecto"})
            }
        }
    })

})

module.exports=router;