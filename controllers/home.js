//basic controller
angular.module('Foodees')
  .controller('HomeCtrl', function($scope, Supplier){
    $scope.page = "home";
    $scope.suppliers = Supplier.query({page: 3})
  });
