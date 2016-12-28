// INITILIZE APP
// ============================================================
var app = angular.module("bash", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './app/views/home.html',
        controller: 'home',
      })
      .state('menu', {
        url: '/',
        templateUrl: './app/views/menu.html',
        controller: 'menu',
      })
      .state('contact', {
        url: '/',
        templateUrl: './app/views/contact.html',
        controller: 'contact',
      })

  
  
});

