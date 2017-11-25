module.exports= function(app){
    var controller = app.controllers.cliente;

    app.get('/clientes', controller.listarCliente);
    app.get('/clientes/:id', controller.obterCliente);
    app.post('/clientes', controller.criarCliente);
    app.put('/clientes', controller.editarCliente);
    app.delete('/clientes/:id', controller.removerCliente);
};