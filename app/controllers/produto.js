
module.exports = function(app){

    var Produto = app.models.produto;

    var controller = {}
    
    controller.listarProduto = function(req, res){
        Produto.find().exec().then(
            function(produtos){
                res.json(produtos);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obterProduto = function(req, res){
        var _id = req.params.id;
        Produto.findById(_id).exec().then(
            function(produto){
                if(!produto) throw new Error("Produto não encontrado");
                res.json(produto);
            },
            function(erro){
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };

    controller.criarProduto = function(req, res){

        Produto.create(req.body).then(
            function(produto){
                res.status(201).json(produto);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.editarProduto = function(req, res){
        var _id = req.body._id;
        
        Produto.findByIdAndUpdate(_id, req.body).then(
            function(produto){
            res.status(200).json(produto);
            },
            function(erro){
                console.error(erro);
                res.status(404).json('Produto não encontrado');
            }
        );
    };

    controller.removerProduto = function(req, res){
        var _id = req.params.id;
        
        Produto.remove({"_id" : _id}).exec().then(
            function(){
                res.status(201).end();
            },
            function(erro){
                console.error(erro);
            }
        );
    };
    return controller;
}