angular.modeule('Foodees', ['ngResource', 'ngMessages', 'ngAnimate', 'toastr'])
  .config(function($stateProvider, $urlRouteProvider){
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
      $urlRouteProvider.otherwise('/');
  })
