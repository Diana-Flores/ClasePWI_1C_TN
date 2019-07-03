var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');

// nuevo: lo usaremos para crear sesiones(variables)
var session = require("express-session"); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registro = require('./routes/registro');
var panel = require('./routes/panel');
var promociones = require('./routes/promociones');
var mostrarUsuarios = require('./routes/mostrarUsuarios');

var app = express();
var login = require('./routes/login');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/registro', registro);
app.use('/login', login);
app.use('/panel', panel);
app.use('/promociones', promociones);
app.use('/mostrarUsuarios', mostrarUsuarios);



app.use(session({secret:"1234",cookies:
{maxAge: null}, saveUninitualized: false, resave:false})); 
// secur: true dentro de usa https
// saveUninitualized: false -> las variables de sesion se pueden iusar para carritos de compra, saveUninitualized =true se va generar una nueva variable de sesion que va tener el valor final 
// saveUninitualized: es un acumulador si esta en false-> opera sobre la misma variable. mientras si esta en true-> lo que hace es crear varibales por cada compra de carrito que haga. 


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
