var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('59cc47275a8ed0ecf30ca9a2');

MongoClient.connect('mongodb://127.0.0.1:27017/p1fausto',
    function(erro, db){
        if(erro) throw err;
        db.collection('vendedores').findOne({_id : _idProcurado},
            function(erro, vendedor){
                if(erro) throw err;
                console.log(vendedor);
            }
        );
    }
);