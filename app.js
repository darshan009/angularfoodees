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
        controller: 'CheckoutCntrl'
      })
      .state('account',{
        url: '/checkout',
        templateUrl: 'views/account.html',
        controller: 'accountCntrl'
      });

      //by default if nothing works out
      $urlRouterProvider.otherwise('/');
  })
