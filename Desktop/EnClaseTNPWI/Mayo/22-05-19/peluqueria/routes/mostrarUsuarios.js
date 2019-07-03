var express = require('express');
var router = express.Router();
var dataBase =  require("./BD/bd"); 

router.get('/', function(req, res, next) {
    res.render('usuario');
    // res.render('usuario'); -> me dice que me muestre esta vista => tengo que crear una vista "usuarios
  });



module.exports = router;