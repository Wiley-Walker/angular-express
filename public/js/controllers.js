'use strict';

/* Controllers */

var controllers = angular.module('myApp.controllers', [])
  controllers.controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  })
  
  controllers.controller('MyCtrl1', function ($scope) {
    // write Ctrl-1 here

  })
  controllers.controller('MyCtrl2', function ($scope) {
    // write Ctrl-2 here

  })
  controllers.controller('MyCtrl3', function ($scope) {
    // write Ctrl-3 here

  })
  
