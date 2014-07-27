angular.module('changeNumberAnimate', [])
.factory('changeNumberAnimate', ['$interval','$timeout', function($interval,$timeout){
  var Timer,
      speed = 1,
      working = false; 

  var changeAction = function (obj) {
    working = true;
    if(working){ 
      var gap = Math.abs(obj.newNum - obj.input);
      switch (gap){
        case 5:
          speed = 200;
          break; 
        case 3:
          speed = 500;
          break;
      }
      if(obj.newNum == obj.input){
          $timeout.cancel(Timer);
          working = false; 
          return;  
      }
      else if(obj.newNum > obj.input){
        obj.newNum = obj.newNum - 1; 
      }
      else if(obj.newNum < obj.input){
        obj.newNum = obj.newNum + 1;         
      }
      Timer = $timeout(function(){ 

        changeAction(obj);        
      },speed);
    } 
  };
  return {
    changeNumber: function(inputSpeed){
      speed = inputSpeed || 10;
      if(working){ 
        $timeout.cancel(Timer); 
        working = false;
      }
      this.input = parseInt(this.input,10);
      if(isNaN(this.input) || this.input < 0){
        this.input = 0;  
      } 
      changeAction(this);
    },
    getNewNum: function(){
      return newNum;
    }
  };

}]);