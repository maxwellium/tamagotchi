angular
  .module('tamagotchi')
  .controller('tamagotchiController', function( $scope, $interval, tamagotchiService ){

    $scope.tamagotchi = tamagotchiService;

    $scope.start = function(){
      $scope.started = true;
      tamagotchiService.start();
    };

    $scope.zustand = tamagotchiService.zustandAendern;

    $interval(function(){
      $scope.night = !$scope.night;
    }, 10000);
  });
