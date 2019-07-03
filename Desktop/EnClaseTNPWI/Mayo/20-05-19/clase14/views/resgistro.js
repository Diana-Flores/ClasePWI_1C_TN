var express = require('express');
var router = express.Router();

// cuando envio el formulario
router.post('/registro',function(req,res,next){
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var pw1 = req.body.password1;
    var pw2 = req.body.password2;
    if(pw1 == pw2 && nombre.length > 0 && apellido.length > 0){
        // res.redirect('/login');
    } else {
        res.render('registro',{mensaje : Datos incorrectos});
    }
})

module.exports = router;


