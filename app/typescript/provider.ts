/**
 * Created by bsun on 2/5/15.
 */

/// <reference path='angular.d.ts' />

(function (angular) {

   var app = angular.module('myApp')
      .service('UserService', function ($q:ng.IQService, $timeout:ng.ITimeoutService) {
         return {
            getUser: function (id):ng.IPromise<any> {
               var defer:ng.IDeferred<any> = $q.defer();
               $timeout(function () {
                  defer.resolve({
                     id: id, name: id + '-john'
                  });
               }, 2000);
               return defer.promise;
            }
         }
      })

      .provider('UserProvider', function () {
         this.$get = function (UserService) {
            return function (id):ng.IPromise<any> {
               return UserService.getUser(id);
            };
         }
      });


})(angular);