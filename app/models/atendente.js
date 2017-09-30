var mongoose = require('mongoose');

module.exports = function(){

    var schema = new mongoose.Schema({
        nome: {
            type: String,
            required: true 
        }
    });

    return mongoose.model('Atendente', schema);
}