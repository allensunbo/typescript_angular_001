/**
 * Created by bsun on 1/31/15.
 */
/// <reference path='../angular.d.ts' />
/// <reference path='./appModel.ts' />
/// <reference path='../directive.ts' />
/// <reference path='../directive2.ts' />
/// <reference path='./greeter.d.ts' />

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


   //app.controller('GreeterCtrl', function ($scope:com.axioma.interface.IAppCtrlScope) {
   app.controller('GreeterCtrl', function () {
      var vm = this;
      vm.content = 'This content from GreeterCtrl!';
      vm.doClick = function (content) {
         console.log('@' + content + '@');
      }
   });

   app.directive('changeName', com.axioma.directive.changeName);
   app.directive('styledPanel', com.axioma.directive2.styledPanel);

})(angular);





