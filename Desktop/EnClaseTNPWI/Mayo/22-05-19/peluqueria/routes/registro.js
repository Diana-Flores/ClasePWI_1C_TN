var express = require('express');
var router = express.Router();
var bd =  require("./BD/bd"); //es un import de nuestro primer modulo 
//Para hacer una consulta, debo hacer una consulta global. en bd 


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('registro',{title :"Bienvenido a la pelu del siglo por favor, registrate"} );
});

// va llegar con post qu esta definido en Registration.hbs
//arrow function => es uan sintaxis nueva para defnir fucnones anominas 
router.post('/', (res, req, next)=>{
    var usuario = req.body.usuario; //usuario es el name del input 
    var password = req.body.password; // es password despyes de body es el name del input
    //aqui va ver tpdp sql
    bd.query("insert into usuarios (usuario, password, confirmado) values ('"+usuario+"'.'"+password+"',0)", (err, rows)=>{
        if(err){
            console.log(err)
                    } else {
                        res.render("registro", {mensaje :  "REgistro Exitoso"})
                    }
    })
    // el rows nos serviria para renderizar, como por ej ver el listado de los que se registraron y ver si el resgitro no se duplico id doble?
    var dato =  {
        usuario : req.body.usuario,
        password : req.body.password,
        confirmado : 0
    }
    bd.query("insert into usuarios set ?", dato, (err, row)=>{
        if (err)
        console.log(err); 
        else 
        res.render("registro", {mensaje : "REgistro exitoso"}); 
    }) 

})



module.exports = router;
