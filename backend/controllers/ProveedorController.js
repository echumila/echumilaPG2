var Proveedor = require('../models/proveedor');

function listar(req, res){
    Proveedor.find((err, proveedores_data)=>{
        if(proveedores_data){
            res.status(200).send({proveedores: proveedores_data});
        }else{
            res.status(403).send({message: 'no hay clientes en la base de datos'});
        }
    });
}

function get_proveedor(req, res){
    var id = req.params['id'];
     
    Proveedor.findById(id,(err,proveedor_data)=>{
        if(proveedor_data){
            res.status(200).send({proveedor: proveedor_data});
        }
    })
}

function registrar(req, res){
    let data = req.body;
    var proveedor = new Proveedor();
    proveedor.nombres = data.nombres;
    proveedor.correo = data.correo;
    proveedor.codigo = data.codigo;
    proveedor.puntos = 10;
    
    proveedor.save((err, proveedor_save)=>{
        if(proveedor_save){
            res.status(200).send({proveedor: proveedor_save});
        }else{
            res.status(500).send(err);
        }
    });
}

function editar(req, res){
    let id = req.params['id'];
    let data = req.body;

    Proveedor.findByIdAndUpdate(id, {nombres: data.nombres, codigo: data.codigo, correo: data.correo}, (err, proveedor_edit)=>{
        if(proveedor_edit){
            res.status(200).send({proveedor: proveedor_edit})
        }else{
            res.status(500).send(err);
        }
    });
}

function eliminar(req, res){
    let id = req.params['id'];

    Proveedor.findByIdAndRemove(id, (err, proveedor_delete)=>{
        if(proveedor_delete){
            res.status(200).send({proveedor: proveedor_delete}) 
        }else{
            res.status(500).send(err);
        }
    });
}

module.exports = {
    listar,
    registrar,
    editar,
    eliminar,
    get_proveedor
}