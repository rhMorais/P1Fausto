
module.exports = function(app){

    var Produto = app.models.produto;

    var controller = {}
    
    controller.listaProduto = function(req, res){
        var promise = Produto.find().exec()
        .then(
            function(produtos){
                res.json(produtos);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemProduto = function(req, res){
        var _id = req.params.id;
        Produto.findById(_id).exec()
        .then(
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

    controller.removeProduto = function(req, res){
        var _id = req.params.id;
        Produto.remove({"_id" : _id}).exec()
        .then(
            function(){
                res.status(204).end();
            },
            function(erro){
                return console.error(erro);
            }
        );
    };

    controller.salvaProduto = function(req, res){
        var _id = req.body._id;

        req.body.emergencia = req.body.emergencia || null;

        if(_id){
            Produto.findByIdAndUpdate(_id, req.body).exec()
            .then(function(produto){
                res.json(produto);
            },
            function(erro){
                console.error(erro);
                res.status(500).json(erro);
            }
          );
        }else{
            // Produto.create(req.body)
            // .then(function(produto){
            //     res.status(201).json(produto);
            // },
            // function(erro){
            //     console.log(erro);
            //     res.status(500).json(erro);
            // }
          //);
        }
    };

    controller.criaProduto = function(req, res){
        var produto = new Produto(req.body);
        produto.save(function(erro, produto){
            if(erro){
                res.status(500).end();
                console.log(erro);
            } else {
                res.json(produto);
            }
        });
    }

    return controller;
}