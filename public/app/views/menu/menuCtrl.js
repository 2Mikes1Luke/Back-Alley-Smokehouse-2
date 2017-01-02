// INITILIZE CONTROLLER
// ============================================================
angular.module("bash").controller("menuCtrl", function($scope) {
  // VARIABLES
  
  //Togglers for section types
  
  $scope.fullSection = true;
  $scope.partialSection = true;
  $scope.listSection = true;
  
  //Menu Subtitles
  
  $scope.menuSubtitle1 = true;
  $scope.menuSubtitle2 = false;
  $scope.menuSubtitle3 = false;

  // ============================================================
  $scope.test = "menu test"
  // FUNCTIONS
  // ============================================================
});
