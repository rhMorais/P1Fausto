var vendedores = [
    {_id: 1, nome: 'Vendedor 1',
    email: 'vendedor1@empresa.com'},
    {_id: 2, nome: 'Vendedor 2',
    email: 'vendedor2@empresa.com'},
    {_id: 3, nome: 'Vendedor 3',
    email: 'vendedor3@empresa.com'}
];

module.exports = function(){
    var controller = {};
    controller.listaVendedores = function(req, res){
        res.json(vendedores);
    }
    controller.obtemVendedor = function(req, res){
        var idVendedor = req.params.id;
        var vendedor = vendedores.filter(function(vendedor){
            return vendedor._id == idVendedor;
        })[0];
        vendedor ?
            res.json(vendedor) :
            res.status(404).send('Contato não encontrado');        
    }
    return controller;
}