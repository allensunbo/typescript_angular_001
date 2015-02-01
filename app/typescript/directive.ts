/**
 * Created by bsun on 1/31/15.
 */
/// <reference path='angular.d.ts' />
/// <reference path='jquery.d.ts' />
module com.axioma.directive {
   'use strict';
   export function changeName($location: ng.ILocationService):ng.IDirective {
      return {
         restrict: 'A',
         scope: false, // use controller scope
         link: ($scope:ng.IScope, element:JQuery) => {
            element
               .on('mouseenter', function () {
                  // console.log('mouse-enter');
               })
               .on('click', function () {
                  // console.log('click');
                  console.log($location.path());
               });
         }
      }
   };
}

