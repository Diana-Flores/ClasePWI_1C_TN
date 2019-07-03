var express = require('express');
var router = express.Router();
// '/:nombre/:edad/:foto' le puse pasar cualquier ruta 

router.get('/:nombre/:edad/:foto', function(req,res,next){
    //req.body.usuario
    //console.log(req) -> params: [{  }]
    var nombre = req.params.nombre;
    var edad = req.params.edad; 
    var foto = req.params.foto; 

    var datos ={
        nombre: req.params.nombre,
        edad: req.params.edad,
        foto: req.params.foto
    }
    red.render('persona', datos)
   
    // res.render('persona', {nombre: nombre, edad: edad, foto: foto}); 
})

module.exports = router; 
// esto establece la relacion entre app punto persona 