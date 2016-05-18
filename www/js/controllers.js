angular.module('starter.controllers', [])

.controller("pruebaCtrl",function($scope,ws){


    //
    //

    ws.getPaises().then(function(rsPaises){
        $scope.paises = rsPaises;
        $scope.paisSeleccionado = $scope.paises[0];

        getEstados(1).then(function(rsEstados){
            $scope.PrincipalEstados = rsEstados;
            $scope.estadoSeleccionado = rsEstados[0];
        },function(rsResultado){
            console.log(rsResultado);
        });
    });

    $scope.estadosFunction = function(id){
    alert('Pais seleccionado '+$scope.paises[id-1].nombre);

      ws.getEstados(id).then(function(rsEstados){
          $scope.PrincipalEstados = rsEstados;
          $scope.estadoSeleccionado = rsEstados[0];
      },function(rsResultado){
          console.log(rsResultado);
      });
    }

    $scope.PrincipalEstados = getEstados(1);
    console.log($scope.estados);
    $scope.estadoSeleccionado = $scope.PrincipalEstados[3];

});
