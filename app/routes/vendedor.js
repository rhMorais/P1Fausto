module.exports= function(app){
    var controller = app.controllers.vendedor;
    app.get('/vendedores', controller.listaVendedores);
    app.get('/vendedores:id', controller.obtemVendedor)
};

