
module.exports = function(app){

    var controller = {};

    var Vendedor = app.models.vendedor;
    
    controller.listarVendedor = function(req, res){
        
        Vendedor.find().exec().then(
            function(vendedores){
                res.json(vendedores);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obterVendedor = function(req, res){
        var _id = req.params.id;
        Vendedor.findById(_id).exec().then(
            function(vendedor){
                if(!vendedor) throw new Error("Vendedor não encontrado");
                res.json(vendedor);
            },
            function(erro){
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.criarVendedor = function(req, res){

        Vendedor.create(req.body).then(
            function(vendedor){
                res.status(201).json(vendedor);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.editarVendedor = function(req, res){
        var _id = req.body._id;

        Vendedor.findByIdAndUpdate(_id, req.body).then(
            function(vendedor){
                res.status(200).json(vendedor);
            },
            function(erro){
                console.error(erro);
                res.status(404).json('Vendedor não encontrado para atualizar');
            }
        );
    };

    controller.removerVendedor = function(req, res){
        var _id = req.params.id;
        
        Vendedor.remove({"_id" : _id}).exec().then(
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