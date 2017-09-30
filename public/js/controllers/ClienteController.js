angular.module('P1Fausto').controller('ClienteController',
    function($scope, $routeParams, Cliente){


    Cliente.query(function(clientes){
        $scope.clientes = clientes;
    });
});