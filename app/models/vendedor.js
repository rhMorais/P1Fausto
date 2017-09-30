var mongoose = require('mongoose');

module.exports = function(){

    var schema = new mongoose.Schema({
        nome: {
            type: String,
            required: true 
        },
        telefone: {
            type: String,
            required: true
        },
        celular:{
            type: String,
            required: true
        },
        empresa: {
            type: String,
            required: true
        },
        emergencia: {
            type: mongoose.Schema.ObjectId,
            ref: 'Vendedor'
        }
    });

    return mongoose.model('Vendedor', schema);
}