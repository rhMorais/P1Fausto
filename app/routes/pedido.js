module.exports= function(app){
    var controller = app.controllers.pedido;
    app.get('/pedidos', controller.listaPedido);
    app.get('/pedidos:id', controller.obtemPedido);
    app.delete('/pedidos/:id', controller.removePedido);
    app.post('/pedidos', controller.criaPedido);
};