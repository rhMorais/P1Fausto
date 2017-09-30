module.exports= function(app){
    var controller = app.controllers.vendedor;
    app.get('/vendedores', controller.listaVendedor);
    app.get('/vendedores:id', controller.obtemVendedor);
    app.delete('/vendedores/:id', controller.removeVendedor);
};

