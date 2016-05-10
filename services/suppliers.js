angular.module('Foodees')
  .factory('Supplier', function($resource){
    return $resource('http://supplydata.herokuapp.com/supplier/:_id');
  })
