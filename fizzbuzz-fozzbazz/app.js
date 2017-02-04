angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */

  .factory('counter', ['$scope', function(scope) {
    scope.counter = 0;
    scope.increment = function() {
    scope.counter++;
    return scope.counter;
    };
  }])
  
  .controller('fizzbuzzCtrl', function($scope){
    $scope.increment();
    var temp = $scope.counter;
    switch(temp){
      case temp % 3: 
      return 'FIZZ';
      break;
      case temp % 5:
      return 'BUZZ'; 
      break;
      
    }
  })
  .controller('fozzbazzCtrl', function($scope){
    $scope.increment();
  });
