var express = require('express');
var router = express.Router();
var upload =  multer({dest : "./subidas/"});
var multer = require('multer');
var fs = require('fs');

router.get('/', (req, res, next)=> {
  res.render('upload', { title:''});
});

// 1 verifiquemos si el mietype es el pequeño (las imagenes q em suban)
// 2 una ves que subimos la foto tenemos que eliminarla con unlink-> vamos a la carpeta donde estan los archivos tmeporales y algo ams---- despues paso la funcion error por si sucede algo
// 3 re
router.post("/new",upload.array("foto",1), (req, res, next)=>{

    console.log(req.files[0].mimetype=="image/jpeg");  

    if(req.file[0].minetype == "iamges/jpeg" && size < 10000){
    file.creatReadStream("./subidas"+req.files[0].filename).pipe(fs.createWriteStream("./public/fotitos"+req.files[0].originalname));
    // 2DO unlink es para leimianr archivos, tempoprales o no 
    fs.unlink("./subidas/" +req.files[0].filename, (err)=>{
        console.log(err); 
    }); 
    
    // 3RO 
    res.render("upload", {title: "foto subida"});
    } else {
        res.render("upload", {title : "formato no permitido"})
    }
    
    

}); 




module.exports = router;
