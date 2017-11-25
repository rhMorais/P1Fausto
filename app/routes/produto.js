module.exports= function(app){
    var controller = app.controllers.produto;

    app.get('/produtos', controller.listarProduto);
    app.get('/produtos/:id', controller.obterProduto);
    app.post('/produtos', controller.criarProduto);
    app.put('/produtos', controller.editarProduto);
    app.delete('/produtos/:id', controller.removerProduto);
};