var express = require('express');
var proveedorController = require('../controllers/ProveedorController');

var api = express.Router();

api.get('/proveedores', proveedorController.listar);
api.post('/proveedor/registrar', proveedorController.registrar);
api.put('/proveedor/editar/:id', proveedorController.editar);
api.delete('/proveedor/eliminar/:id', proveedorController.eliminar);
api.get('/proveedor/:id', proveedorController.get_proveedor);

module.exports = api;