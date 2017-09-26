var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('dsafdsfafa');

MongoClient.connect('mongodb://127.0.0.1:27017/P1Fausto',
    function(erro, db){
        if(erro) throw err;
        db.collection('contatos').findOne({_id : _idProcurado},
            function(erro, vendedor){
                if(erro) throw err;
                console.log(vendedor);
            }
        );
    }
);