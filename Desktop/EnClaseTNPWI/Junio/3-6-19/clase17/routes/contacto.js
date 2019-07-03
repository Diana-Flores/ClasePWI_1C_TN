var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var fs = require('fs');

//localhost:3000/contacto


router.get('/', (req, res, next)=> {
    res.render('contacto', { title:''});
    // res.render('contacto'); no hace falta enviar algo por pantalla
  });

router.post('/enviar', (req, res, next)=> {
    // Voy enviar el correo 
    var nombre =  req.body.nombre; 
    async function main(){

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
        //   https en su pagina, eso me quiere decir false. es decir que no tinecertificado de seguridad. de hppts
          secure: false, // true for 465, false for other ports
          auth: {
            user: "diana.flove@hotmail.com", // generated ethereal user
            pass: "dvsfvsdf" // generated ethereal password
          }, 
        //   tls se le agrega cuando secur : false, siempre para que sea seguro. 
          tls: {
              rejectUnauthorized : false 
          }

        });
      
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: '"Fred Foo 👻" <foo@example.com>', // sender address
          to: "bar@example.com, baz@example.com", // list of receivers
          subject: "Hello ✔"+nombre, // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>" // html body GRALMETE SE HACE UN PARSER 
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      }
      
      main().catch(console.error);

    
  });




module.exports = router;
