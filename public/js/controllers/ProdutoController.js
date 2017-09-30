angular.module('P1Fausto').controller('ProdutoController',
    function($scope, $routeParams, Produto){


    Produto.query(function(produtos){
        $scope.produtos = produtos;
    });
});