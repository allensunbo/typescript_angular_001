'use strict';

angular.module('myApp.view3', ['ngRoute', 'myApp'])

   .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/view3', {
         templateUrl: 'view3/view3.html',
         controller: 'View3Ctrl'
      });
   }])

   .controller('View3Ctrl', ['$scope', 'GreeterService2', function ($scope, GreeterService2) {
      var student = new com.axioma.model.AppModel.Student('Allen', 'Woody');
      $scope.message = GreeterService2(student);
      student.registerClass('History 101');
   }]);