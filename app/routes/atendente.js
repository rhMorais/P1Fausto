module.exports= function(app){
    var controller = app.controllers.atendente;

    app.get('/atendentes', controller.listarAtendente);
    app.get('/atendentes/:id', controller.obterAtendente);
    app.post('/atendentes', controller.criarAtendente);
    app.put('/atendentes', controller.editarAtendente);
    app.delete('/atendentes/:id', controller.removerAtendente);
};