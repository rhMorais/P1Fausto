module.exports= function(app){
    var controller = app.controllers.vendedor;
    
    app.get('/vendedores', controller.obterVendedor);
    app.get('/vendedores/:id', controller.obterVendedor);
    app.post('/vendedores', controller.criarVendedor);
    app.put('/vendedores', controller.editarVendedor);
    app.delete('/vendedores/:id', controller.removerVendedor);
};

