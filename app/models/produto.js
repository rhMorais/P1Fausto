var mongoose = require('mongoose');

module.exports = function () {

    var schema = new mongoose.Schema({
        descricao: {
            type: String,
            required: true
        },
        preco: {
            type: String,
            required: true
        },
        vendedor: {
            type: mongoose.Schema.ObjectId,
            ref: 'Vendedor',
            required: true
        }
    });

    return mongoose.model('Produto', schema);
}