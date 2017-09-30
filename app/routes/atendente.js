module.exports= function(app){
    var controller = app.controllers.atendente;
    app.get('/atendentes', controller.listaAtendente);
    app.get('/atendentes:id', controller.obtemAtendente);
    app.delete('/atendentes/:id', controller.removeAtendente);
    app.post('/atendentes', controller.criaAtendente);
};