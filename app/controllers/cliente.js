
module.exports = function(app){

    var Cliente = app.models.cliente;

    var controller = {}
    
    controller.listarCliente = function(req, res){
        
        Cliente.find().exec().then(
            function(clientes){
                res.json(clientes);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obterCliente = function(req, res){
        var _id = req.params.id;
        Cliente.findById(_id).exec().then(
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

    controller.criarCliente = function(req, res){

        Cliente.create(req.body).then(
            function(erro, cliente){
                res.status(201).json(cliente);
            }, 
            function(erro){
                console.error(erro);
                res.json(cliente);
            }
        );
    };

    controller.editarCliente = function(req, res){
        var _id = req.body._id;

        Cliente.findByIdAndUpdate(_id, req.body).then(
            function(cliente){
                res.status(200).json(cliente);
            },
            function(erro){
                console.error(erro);
                res.status(404).json('Cliente não encontrado para atualizar');
            }
        );
    };

    controller.removerCliente = function(req, res){
        var _id = req.params.id;

        Cliente.remove({"_id" : _id}).then(
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