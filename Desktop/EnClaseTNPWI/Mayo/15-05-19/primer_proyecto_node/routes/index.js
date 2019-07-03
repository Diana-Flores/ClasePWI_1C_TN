import { get } from 'https';
import { getType } from '../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/mime';
import { request, response } from '../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/express';

var express = require('express');

// estamos creandoo una referencia var express 
var router = express.Router();

/* GET home page. */
// 4 verbos:
// get
// post 
// put para actualizar datos 
// delete para borrar datos

// function es una funcion anonima, 
// request == res -> tiene todas la spropuedades para enviar informacion a distintas de la aplicacion (pido infor. hice una solicitud y quiero alamcenar todas todo lo que me envian y eso lo hago en req) ENTRADA DE INFOR. 
// req -> es un objeto que almacena toda la infor. que le llega a la ruta. (una ves que le lego la infor. almaceno los datos del contacto ) SALIDA DE INFOR. 
response
next  
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  // res.render lo que hace es, abrir indez y le pasa una funcion donde tiene como parametro title y tira como resultado express en la pantalla
  
});

module.exports = router;
