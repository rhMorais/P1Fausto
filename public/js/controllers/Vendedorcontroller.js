angular.module('P1Fausto').controller('VendedorController',
    function($scope, $routeParams, Vendedor){


    Vendedor.query(function(vendedores){
        $scope.vendedores = vendedores;
    });
});