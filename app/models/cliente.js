var mongoose = require('mongoose');

module.exports = function(){

    var schema = new mongoose.Schema({
        nome: {
            type: String,
            required: true 
        },
        cpf: {
            type: String,
            required: true 
        },
        endereco: {
            type: String,
            required: true 
        },
        celular: {
            type: String,
            required: true 
        },
        email: {
            type: String,
            required: true 
        }
        });

    return mongoose.model('Cliente', schema);
}