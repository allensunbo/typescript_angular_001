
'use strict';

angular.module('myApp.view1', ['ngRoute', 'greeter'])
   .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/view1', {
         templateUrl: 'view1/view1.html',
         controller: 'View1Ctrl'
      });
   }])
   .controller('View1Ctrl', ['$scope', 'GreeterService', function ($scope, GreeterService) {
      var user = {
         firstname: 'John',
         lastname: 'Smith'
      };
      $scope.message = GreeterService(user);
   }]);
'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);
'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));

  describe('view2 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});
'use strict';

angular.module('myApp.view3', ['ngRoute', 'greeter'])

   .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/view3', {
         templateUrl: 'view3/view3.html',
         controller: 'View3Ctrl'
      });
   }])

   .controller('View3Ctrl', ['$scope', 'GreeterService2', function ($scope, GreeterService2) {
      var user = new Student('Allen', 'Woody');
      $scope.message = GreeterService2(user);
   }]);
'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));

  describe('view2 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});