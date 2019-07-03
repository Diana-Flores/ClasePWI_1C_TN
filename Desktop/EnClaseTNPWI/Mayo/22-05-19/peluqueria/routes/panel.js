var express = require('express');
var router = express.Router();
var bd = require('./BD/bd'); 

router.get('/', (req, res, next)=>{
    if(req.session.usuario){
        bd.query("SELECT * FROM usuarios", (err, rows)=>{
            if(err){
                console.log(err);
            }else {
                console.log(rows); 
                res.render("panel", {dato : rows}); 
                //rows, me trae un array de objetos.  
            }
        })
    

        }else {
            res.redirect("/login"); 
        }
})

//alta baja modificacion ABM 
module.exports = router;
