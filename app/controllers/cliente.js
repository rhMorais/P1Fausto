
module.exports = function(app){

    var Cliente = app.models.cliente;

    var controller = {}
    
    controller.listaCliente = function(req, res){
        var promise = Cliente.find().exec()
        .then(
            function(clientes){
                res.json(clientes);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemCliente = function(req, res){
        var _id = req.params.id;
        Cliente.findById(_id).exec()
        .then(
            function(cliente){
                if(!cliente) throw new Error("Cliente não encontrado");
                res.json(cliente);
            },
            function(erro){
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.removeCliente = function(req, res){
        var _id = req.params.id;
        Cliente.remove({"_id" : _id}).exec()
        .then(
            function(){
                res.status(204).end();
            },
            function(erro){
                return console.error(erro);
            }
        );
    };

    controller.salvaCliente = function(req, res){
        var _id = req.body._id;

        req.body.emergencia = req.body.emergencia || null;

        if(_id){
            Cliente.findByIdAndUpdate(_id, req.body).exec()
            .then(function(cliente){
                res.json(cliente);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
          );
        }else{
            // Cliente.create(req.body)
            // .then(function(cliente){
            //     res.status(201).json(cliente);
            // },
            // function(erro){
            //     console.log(erro);
            //     res.status(500).json(erro);
            // }
          //);
        }
    };

    controller.criaCliente = function(req, res){
        var cliente = new Cliente(req.body);
        cliente.save(function(erro, cliente){
            if(erro){
                res.status(500).end();
                console.log(erro);
            } else {
                res.json(cliente);
            }
        });
    }

    return controller;
}