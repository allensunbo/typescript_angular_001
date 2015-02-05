'use strict';

angular.module('myApp.view3', ['ngRoute', 'myApp'])

   .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/view3', {
         templateUrl: 'view3/view3.html',
         controller: 'View3Ctrl'
      });
   }])

   .controller('View3Ctrl', ['$scope', 'GreeterService2', 'UserProvider', function ($scope, GreeterService2, UserProvider) {
      var student = new com.axioma.model.AppModel.Student('Allen', 'Woody');
      $scope.message = GreeterService2(student);
      student.registerClass('History 101');
      console.log(UserProvider(1001));
   }]);