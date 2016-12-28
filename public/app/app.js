// INITILIZE APP
// ============================================================
var app = angular.module("bash", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './app/views/home/home.html',
        controller: 'homeCtrl',
      })
      .state('menu', {
        url: '/menu',
        templateUrl: './app/views/menu/menu.html',
        controller: 'menuCtrl',
      })
      .state('contact', {
        url: '/contact',
        templateUrl: './app/views/contact/contact.html',
        controller: 'contactCtrl',
      })



});
