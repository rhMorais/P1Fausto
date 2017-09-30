var mongoose = require('mongoose');

module.exports = function(){

    var schema = new mongoose.Schema({
        observacao: {
            type: String,
            required: true 
        },
        valortotal: {
            type: String,
            required: true 
        },
        atendende: {
            type: mongoose.Schema.ObjectId,
            ref: 'Atendente',
            required: true 
        },
        cliente: {
            type: mongoose.Schema.ObjectId,
            ref: 'Cliente',
            required: true 
        }
    });

    return mongoose.model('Pedido', schema);
}