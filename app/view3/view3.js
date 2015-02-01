'use strict';

angular.module('myApp.view3', ['ngRoute', 'greeter'])

   .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/view3', {
         templateUrl: 'view3/view3.html',
         controller: 'View3Ctrl'
      });
   }])

   .controller('View3Ctrl', ['$scope', 'GreeterService2', function ($scope, GreeterService2) {
      var user = new Student('Allen', 'Woody');
      $scope.message = GreeterService2(user);
   }]);