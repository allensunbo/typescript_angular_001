/// <reference path='../angular.d.ts' />
(function (angular) {
    angular.module('greeter', []).service('GreeterService', function () {
        function greeter(person) {
            return "Hello, " + person.firstname + " " + person.lastname;
        }
        return greeter;
    });
})(angular);
//# sourceMappingURL=greeter.js.map