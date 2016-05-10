angular.module('Foodees', ['ngResource', 'ngMessages', 'ngAnimate', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('checkout',{
        url: '/checkout',
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl'
      })
      .state('account',{
        url: '/account',
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      });

      //by default if nothing works out
      $urlRouterProvider.otherwise('/');
  })
