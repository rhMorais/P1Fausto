
module.exports = function(app){

    var Atendente = app.models.atendente;

    var controller = {}
    
    controller.listaAtendente = function(req, res){
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

    controller.obtemAtendente = function(req, res){
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

    controller.removeAtendente = function(req, res){
        var _id = req.params.id;
        
        Atendente.remove({"_id" : _id}).exec().then(
            function(){
                res.status(203).end();
            },
            function(erro){
                return console.error(erro);
            }
        );
    };

    controller.salvaAtendente = function(req, res){
        var _id = req.body._id;

        req.body.emergencia = req.body.emergencia || null;

        if(_id){
            Atendente.findByIdAndUpdate(_id, req.body).exec()
            .then(function(atendente){
                res.json(atendente);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
          );
        }else{
            // Atendente.create(req.body)
            // .then(function(atendente){
            //     res.status(201).json(atendente);
            // },
            // function(erro){
            //     console.log(erro);
            //     res.status(500).json(erro);
            // }
          //);
        }
    };

    controller.criaAtendente = function(req, res){
        var atendente = new Atendente(req.body);
        atendente.save(function(erro, atendente){
            if(erro){
                res.status(500).end();
                console.log(erro);
            } else {
                res.json(atendente);
            }
        });
    }

    return controller;
}