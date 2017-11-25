
module.exports = function(app){

    var controller = {};

    var Atendente = app.models.atendente;
    
    controller.listarAtendente = function(req, res){
        
        Atendente.find().exec().then(
            function(atendentes){
                res.json(atendentes);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obterAtendente = function(req, res){
        var _id = req.params.id;
        Atendente.findById(_id).exec().then(
            function(atendente){
                if(!atendente) throw new Error("Atendente não encontrado");
                res.json(atendente);
            },
            function(erro){
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.criarAtendente = function(req, res){
        
        Atendente.create(req.body).then(
            function(atendente){
                res.status(201).json(trabalho);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.editarAtendente = function(req, res){
        var _id = req.body._id;

        Atendente.findByIdAndUpdate(_id, req.body).then(
            function(atendente){
                res.status(200).json(atendente);
            },
            function(erro){
                console.error(erro);
                res.status(404).json('Atendente não encontrado para atualizar');
            }
        );
    };

    controller.removerAtendente = function(req, res){
        var _id = req.params.id;
        
        Atendente.remove({"_id" : _id}).exec().then(
            function(){
                res.status(203).end();
            },
            function(erro){
                console.error(erro);
            }
        );
    };
    
    return controller;
}