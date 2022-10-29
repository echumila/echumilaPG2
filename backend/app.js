var express = require('express');
var bodyperser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 4201;

//routes
var user_routes = require('./routes/user');
var categoria_routes = require('./routes/categoria');
var producto_routes = require('./routes/producto');
var cliente_routes = require('./routes/cliente');
var venta_routes = require('./routes/venta');
var proveedor_routes = require('./routes/proveedor');

var app = express();

mongoose.connect('mongodb://localhost:27017/sistema',{useUnifiedTopology: true, useNewUrlParser: true},(err, res)=>{
    if(err){
        throw err;
    }else{
        console.log("corriendo servidor");
        app.listen(port, function(){
            console.log("servidor conectado en "+ port);
        });
    }
}); 

app.use(bodyperser.urlencoded({extended: true}));
app.use(bodyperser.json());

app.use((req,res,next)=>{
    res.header('Content-Type: application/json');
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api', user_routes);
app.use('/api', categoria_routes);
app.use('/api', producto_routes);
app.use('/api', cliente_routes);
app.use('/api', venta_routes);
app.use('/api', proveedor_routes);

module.exports = app;