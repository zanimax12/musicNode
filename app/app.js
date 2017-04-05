'use strict';

// Declare app level module which depends on views, and components


console.log("app.js executed");

angular.module('myApp', [
  'btford.socket-io',
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
