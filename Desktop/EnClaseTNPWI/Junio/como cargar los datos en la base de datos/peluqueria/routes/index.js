var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Yo podria poner lo que es get siempre trabaja responsive, renderizar es para mostrar.
// mientras que post es para grabar en la base de datos. 

router.post('/1', function(req, res, next) {
  //console.log("funciona"); 
  // como hago para tomar los datos que me pasas , y grabarlos en mi base de datos? primero declaro una variable, 

  var nombreUsuario = req.body.nombreUsuario; 
  var password = req.body.password;
  var confirmado = req.body.confirmado; 
  var estado =  req.body.estado;

  console.log(nombreUsuario); 

  // insertamos en la base de datos, tiene que pasar por parametro exactamente los nombres que apárecen en la tabla de datos

  var query = "insert into usuarios(´usuario,password,confirmado,estado) values(´" + nombreUsuario + "´,´" + password + "´,´" + confimado + "´,´" + estado "´)"; 

  dataBase.query(query,(error, resultado)=>{
    // la funcion anomina, me va tirar dos resultados, o error o resultado.
    if(error){
      console.log(error)
    }else{
      console.log(resultado)
      res.redirect("/")
    }


  })

  // sql es un lenguaje y node js tambien. 
});

module.exports = router;

// select *from usuarios; me tiene que devolver lo que ingresamos por pantalla. 
