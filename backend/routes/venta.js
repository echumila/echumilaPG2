var express = require('express');
var ventacontroller = require('../controllers/VentaController');

var api = express.Router();

api.post('/venta/registrar', ventacontroller.registrar);
api.get('/venta/:id', ventacontroller.datos_venta);
api.get('/ventas', ventacontroller.listado_venta);
api.get('/venta/data/:id', ventacontroller.detalles_venta);


module.exports = api;