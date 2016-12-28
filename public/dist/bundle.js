// INITILIZE APP
// ============================================================
var app = angular.module("bash", ["ui.router"])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
  
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

  
  
}]);


// INITILIZE CONTROLLER
// ============================================================
angular.module("bash").controller("mainCtrl", ["$scope", function($scope) {

  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================


}]);
// INITILIZE SERVICE
// ============================================================
angular.module("bash").service("collectionService", ["$http", function($http) {

  // CRUD FUNCTIONS
  // ============================================================


  // OTHER FUNCTIONS
  // ============================================================
  

}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("bash").controller("contact", ["$scope", function($scope) {

  // VARIABLES
  // ============================================================
  $scope.test = "Contact Works";

  // FUNCTIONS
  // ============================================================


}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("bash").controller("home", ["$scope", function($scope) {

  // VARIABLES
  // ============================================================
  $scope.test = "Home Works";

  // FUNCTIONS
  // ============================================================


}]);
// INITILIZE CONTROLLER
// ============================================================
angular.module("bash").controller("menu", ["$scope", function($scope) {

  // VARIABLES
  // ============================================================
  $scope.test = "Menu Works";

  // FUNCTIONS
  // ============================================================


}]);
angular.module('bash')
    .directive('baNav', function() {
        return {
            restrict: 'E',
            templateUrl: './app/views/nav.html',
            link: function(scope, element, attributes) {



            }
};

});