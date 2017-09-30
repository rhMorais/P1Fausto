
module.exports = function(app){

    var Pedido = app.models.pedido;

    var controller = {}
    
    controller.listaPedido = function(req, res){
        var promise = Pedido.find().exec()
        .then(
            function(pedidos){
                res.json(pedidos);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemPedido = function(req, res){
        var _id = req.params.id;
        Pedido.findById(_id).exec()
        .then(
            function(pedido){
                if(!pedido) throw new Error("Pedido não encontrado");
                res.json(pedido);
            },
            function(erro){
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.removePedido = function(req, res){
        var _id = req.params.id;
        Pedido.remove({"_id" : _id}).exec()
        .then(
            function(){
                res.status(204).end();
            },
            function(erro){
                return console.error(erro);
            }
        );
    };

    controller.salvaPedido = function(req, res){
        var _id = req.body._id;

        req.body.emergencia = req.body.emergencia || null;

        if(_id){
            Pedido.findByIdAndUpdate(_id, req.body).exec()
            .then(function(pedido){
                res.json(pedido);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
          );
        }else{
            // Pedido.create(req.body)
            // .then(function(pedido){
            //     res.status(201).json(pedido);
            // },
            // function(erro){
            //     console.log(erro);
            //     res.status(500).json(erro);
            // }
          //);
        }
    };

    controller.criaPedido = function(req, res){
        var pedido = new Pedido(req.body);
        pedido.save(function(erro, pedido){
            if(erro){
                res.status(500).end();
                console.log(erro);
            } else {
                res.json(pedido);
            }
        });
    }

    return controller;
}