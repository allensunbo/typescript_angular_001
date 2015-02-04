/**
 * Created by bsun on 1/31/15.
 */
/// <reference path='angular.d.ts' />
/// <reference path='jquery.d.ts' />
module com.axioma.directive2 {
   'use strict';
   export function styledPanel():ng.IDirective {
      return {
         restrict: 'E',
         scope: false, // use controller scope
         transclude: true,
         template: '<div style="border: 1px solid black;width:20%;">' +
            '<div class="panel">title</div>' +
            '<div ng-transclude style="color:green;"></div>' +
            '</div>',
         link: ($scope:ng.IScope, element:JQuery) => {
         }
      }
   };
}

