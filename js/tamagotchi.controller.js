angular
  .module('tamagotchi')
  .controller('tamagotchiController', function( $scope, tamagotchiService ){

    $scope.tamagotchi = tamagotchiService;

    $scope.start = function(){
      $scope.started = true;
      tamagotchiService.start();
    };

    $scope.zustand = tamagotchiService.zustandAendern;

  });
