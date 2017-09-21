export function routerConfig ($stateProvider, $urlRouterProvider, $futureStateProvider) {
  'ngInject';
  'use strict';


  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs:'vm'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs:'vm'
    })
    .state('register',{
      url: '/register',
      templateUrl:'app/register/register.html',
      controller:'RegisterController',
      controllerAs:'vm'
    })
    .state('fanhui',{
      url: '/fanhui',
      templateUrl:'app/fanhui/fanhui.html',
      controller:'FanhuiController',
      controllerAs:'vm'
    })
    .state('shangpin',{
      url: '/shangpin',
      templateUrl:'app/shangpin/01.html',
      controller:'FenController',
      controllerAs:'vm'
    })
    $urlRouterProvider.otherwise('/');
}
