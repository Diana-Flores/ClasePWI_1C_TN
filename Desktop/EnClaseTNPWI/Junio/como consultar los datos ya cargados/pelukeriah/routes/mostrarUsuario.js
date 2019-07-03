var express = require('express');
var router = express.Router();
var dataBase = require("./BD/bd")

router.get('/', function(req,res,next){

    res.render('usuario')

})




module.exports = router;