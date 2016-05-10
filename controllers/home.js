//basic controller
angular.module('Foodees')
  .controller('HomeCtrl', function($scope, Supplier){
    //$scope.page ="home";
    $scope.page = Supplier.query()
  });
