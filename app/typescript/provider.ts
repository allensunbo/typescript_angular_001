/**
 * Created by bsun on 2/5/15.
 */

/// <reference path='angular.d.ts' />

(function (angular) {

   var app = angular.module('myApp')
      .service('UserService', function () {
         return {
            getUser: function (id) {
               return {
                  id: id, name: id + '-john'
               }

            }
         }
      })

      .provider('UserProvider', function () {
         this.$get = function (UserService) {
            return function (id) {
               return UserService.getUser(id);
            }
         };
      });


})(angular);