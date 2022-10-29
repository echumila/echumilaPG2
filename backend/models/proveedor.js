var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var proveedorSchema = Schema({
    nombres: String,
    codigo: String,
    correo: String,
    puntos: Number,
    createAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('proveedor', proveedorSchema);