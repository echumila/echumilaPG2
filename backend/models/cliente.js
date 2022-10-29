var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = Schema({
    nombres: String,
    codigo: String,
    correo: String,
    puntos: Number,
    createAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('cliente', clienteSchema);