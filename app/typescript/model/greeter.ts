/**
 * Created by bsun on 1/31/15.
 */
/// <reference path='../angular.d.ts' />
(function (angular) {
   angular.module('greeter', [])
      .service('GreeterService', function () {


         function greeter(student:Student) {
            return "Hello, " + student.firstname + " " + student.lastname;
         }

         return greeter;
      })

      .service('GreeterService2', function () {
         function greeter(student:Student) {
            return student.getName();
         }

         return greeter;
      });

})(angular);





