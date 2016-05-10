angular.module('Foodees')
  .factory('Supplier', function($resource){
    return $resource('https://supplydata.herokuapp.com/supplier/:_id');
  })
