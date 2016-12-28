// INITILIZE APP
// ============================================================
var app = angular.module("bash", ["ui.router"])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

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
angular.module("bash").controller("contactCtrl", ["$scope", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "contact test"
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
angular.module("bash").controller("homeCtrl", ["$scope", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "home test"
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
// INITILIZE CONTROLLER
// ============================================================
angular.module("bash").controller("menuCtrl", ["$scope", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "menu test"
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
// INITILIZE CONTROLLER
// ============================================================
angular.module("bash").controller("navCtrl", ["$scope", function($scope) {
  // VARIABLES
  // ============================================================
  $scope.test = "nav test"
  // FUNCTIONS
  // ============================================================
}]);
