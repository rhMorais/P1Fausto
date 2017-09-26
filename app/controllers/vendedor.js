

module.exports = function(app){
    
    var Vendedor = app.models.vendedor;

    var controller = {}
    
    controller.listaVendedores = function(req, res){
        var promise = Vendedor.find().exec()
        .then(
            function(vendedores){
                res.json(vendedores);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemVendedor = function(req, res){
        var _id = req.params.id;
        Vendedor.findById(_id).exec()
        .then(
            function(contato){
                if(!contato) throw new Error("Vendedor não encontrado");
                res.json(vendedor);
            },
            function(erro){
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.removeVendedor = function(req, res){
        var _id = req.params.id;
        Vendedor.remove({"_id" : _id}).exec()
        .then(
            function(){
                res.status(204).end();
            },
            function(erro){
                return console.error(erro);
            }
        );
    };

    controller.salvaVendedor = function(req, res){
        var _id = req.body._id;

        req.body.emergencia = req.body.emergencia || null;

        if(_id){
            Vendedor.findByIdAndUpdate(_id, req.body).exec()
            .then(function(vendedor){
                res.json(vendedor);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
          );
        }else{
            // Vendedor.create(req.body)
            // .then(function(vendedor){
            //     res.status(201).json(vendedor);
            // },
            // function(erro){
            //     console.log(erro);
            //     res.status(500).json(erro);
            // }
          );
        }
    };

    controller.criaVendedor = function(req, res){
        var vendedor = new Vendedor(req.body);
        vendedor.save(function(erro, vendedor){
            if(erro){
                res.status(500).end();
                console.log(erro);
            } else {
                res.json(vendedor);
            }
        });
    }

    return controller;
}