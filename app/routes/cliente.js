module.exports= function(app){
    var controller = app.controllers.cliente;
    app.get('/clientes', controller.listaCliente);
    app.get('/clientes:id', controller.obtemCliente);
    app.delete('/clientes/:id', controller.removeCliente);
    app.post('/clientes', controller.criaCliente);
};