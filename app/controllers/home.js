module.exports = function(){
    
    var controller = {};
    
    controller.index = function(req, res){
        res.render('index', {nome: 'Depósito de Bebidas'});
    };

    return controller;
}