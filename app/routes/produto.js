module.exports= function(app){
    var controller = app.controllers.produto;
    console.log(controller);
    app.get('/produtos', controller.listaProduto);
    app.get('/produtos:id', controller.obtemProduto);
    app.delete('/produtos/:id', controller.removeProduto);
    app.post('/produtos', controller.criaProduto);
};