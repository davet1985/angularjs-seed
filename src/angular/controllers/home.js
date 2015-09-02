'use strict';

angular.module('angularSeed.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/home/index.html',
      controller: 'HomeCtrl'
    });
}])

.controller('HomeCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {

  $scope.welcome = 'Welcome to the AngularJS seed app';

}]);
