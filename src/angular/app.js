'use strict';

// Declare app level module which depends on views, and components
angular.module('angularSeed', [
  'ngRoute',
  'angularSeed.home',
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .otherwise({redirectTo: '/'});
}]);
