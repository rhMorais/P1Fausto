angular.module('P1Fausto').controller('AtendenteController',
    function($scope, $routeParams, Atendente){


    Atendente.query(function(atendentes){
        $scope.atendentes = atendentes;
    });
});