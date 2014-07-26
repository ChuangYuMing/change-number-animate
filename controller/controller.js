angular.module('app',['changeNumberAnimate'])
.controller('testA', ['$scope','changeNumberAnimate', function ($scope,numberAnimate){
  $scope.speed = 1;
  $scope.weight ={}; 
  $scope.weight.input = 0; 
  $scope.weight.newNum = 0;  
  $scope.numberChange = function(){ 
    numberAnimate.changeNumber.apply($scope.weight, [$scope.speed]);
  };
}]);

    
  
