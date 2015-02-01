/**
 * Created by bsun on 1/31/15.
 */
/// <reference path='../angular.d.ts' />
/// <reference path='./appModel.ts' />
/// <reference path='../directive.ts' />

interface IAppCtrlScope extends ng.IScope {
   message: string;
}

(function (angular) {

   var app = angular.module('myApp')
      .service('GreeterService', function () {

         function greeter(student:com.axioma.model.AppModel.Student) {
            return "Hello, ";// + student.firstname + " " + student.lastname;
         }

         return greeter;
      })

      .service('GreeterService2', function () {
         function greeter(student:com.axioma.model.AppModel.Student) {
            return student.getName();
         }

         return greeter;
      });


   app.controller('GreeterCtrl', function ($scope:IAppCtrlScope) {
      $scope.message = 'This comes from GreeterCtrl!';
   });

   app.directive('changeName', com.axioma.directive.changeName);

})(angular);





