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
        }
    });

    return mongoose.model('Vendedor', schema);
}