'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/makeTask', {
      templateUrl: 'partials/makeTask',
      controller: 'MyCtrl1'
    }).
    when('/taskList', {
      templateUrl: 'partials/taskList',
      controller: 'MyCtrl2'
    }).
    when('/login', {
      templateUrl: 'partials/login',
      controller: 'MyCtrl3'
    }).
    when('/register', {
      templateUrl: 'partials/register',
      controller: 'RegController'
    }).  
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);

  console.log($('.menu'));
});
