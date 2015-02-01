'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp'])
   .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/view1', {
         templateUrl: 'view1/view1.html',
         controller: 'View1Ctrl'
      });
   }])
   .controller('View1Ctrl', ['$scope', 'GreeterService', function ($scope, GreeterService) {
      var user = {
         firstname: 'John',
         lastname: 'Smith'
      };
      $scope.message = GreeterService(user);
   }]);