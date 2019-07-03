var express = require('express');
var router = express.Router();
var md5 = require('md5'); 
var db =  require('./BD/bd');

// instalamos en la consola -> npm install express-session --save es util cuanod quiero trasladar la infomacion de pagina a pagina 
// desventajas: genera peso en el servidor, ventaja: es mas seguro. 





// var uuid = require('uuid'); 

router.post('/', (req, res, next)=> {
    // mostrar la vista de login 
    res.render("login", {mensaje: "bienvenido"}); 
    bd.query("select * from usuarios where usuario = and password ") 
});
 

router.post("/inicio", (req,res)=>{
    // agarramos los datos del formulario
    // lo almacenamos en objeto o variable 
    var datos = {
        usuario: req.body.usuario,
        password: md5(req.body.password)
    }
    bd.query("´select id_usuario from usuarios where usuarios=´"+datos.usuario+"and password"+datos.password+"", (err,rows)=>{
        if(err){
            console.log(err); //Del lado del servidor los console.log se visualizan en la termina
        }else {
            // cuantos registros nos devuelven esta consulta
            // SQL  me devuelve un array de objetos -> rows 
            console.log(rows); 
            if(rows.lenght>0){
                // hay un match 

                // varible de sesion es global.
                // req.session.usuario= en usuario es algo que creamos y se guarda en el servidor
                // 
                req.session.usuario = rows[0].id_usuario; 
                res.redirect("/panel"); 

            }else{
                // usaurio y contraseña incorrecto 
                res.render("/login", {mensaje: "Usuario y constraseña incorrecto"})
            }
        }
    })

})

module.exports=router;