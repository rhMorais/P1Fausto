angular.module('P1Fausto').controller('PedidoController',
    function($scope, $routeParams, Pedido){


    Pedido.query(function(pedidos){
        $scope.pedidos = pedidos;
    });
});