/**
 * Created by bsun on 1/31/15.
 */
/// <reference path='../angular.d.ts' />
interface Person {
    firstname: string;
    lastname: string;
}
(function (angular) {
    angular.module('greeter', [])
        .service('GreeterService', function () {


            function greeter(person:Person) {
                return "Hello, " + person.firstname + " " + person.lastname;
            }

            return greeter;
        });

})(angular);





