// INITILIZE CONTROLLER
// ============================================================
angular.module("bash").controller("menuCtrl", function($scope) {
  
  // VARIABLES
  // ============================================================
    
  // !!! BIND THIS TO THE DATABESE MENU OBJECT VIA A RESOLVE!!!!
  $scope.menu = {};
    
    
  //Togglers for section types
  // =================================
  $scope.fullSection = true;
  $scope.partialSection = true;
  $scope.listSection = true;
  
    //Togglers for modal 
    
  $scope.modalToggler = true;
  
    //modal content togglers
  $scope.menuSectionModal = true;
  
  $scope.menuItemModal = false;
  
  $scope.showItemPrice = true;
  $scope.showItemDescription = true;
  
    //modal section type togglers
  $scope.modalFullSection = true;
  $scope.modalPartialSection = false;
  $scope.modalListSection = false;
  
    //modal subtitle togglers
  $scope.subtitleAdder1= true;
  $scope.subtitle1 = false;
  $scope.subtitleAdder2= true;
  $scope.subtitle1 = false;
  $scope.subtitleAdder3= true;
  $scope.subtitle1 = false;
  $scope.subtitleAdder4= true;
  
    //Menu Subtitle togglers
  $scope.menuSubtitle1 = true;
  $scope.menuSubtitle2 = false;
  $scope.menuSubtitle3 = false;
  
  //Menu Construction Variables
  // =================================
    
    $scope.currentMenuSection={};
  
    $scope.newMenuSection = {
      title: null,
      type: null,
      subtitle1: null,
      subtitle2: null,
      subtitle3: null,
      groupprice: null
    };
    
    $scope.newMenuSectionItems = [];
    
    $scope.newItem = {
        title: null,
        description: null,
        price: null
    };
    
    $scope.itemExporter = {};
    


    

  // FUNCTIONS
  // ============================================================
  
  
  // menu section style toggler function
  
  $scope.modalSwitcher = function(x){
    
    if(x == 1){
      $scope.newMenuSection.type = "full"
      $scope.modalFullSection = true;
      $scope.modalPartialSection = false;
      $scope.modalListSection = false;
    }else if(x == 2){
      $scope.newMenuSection.type = "partial"
      $scope.modalFullSection = false;
      $scope.modalPartialSection = true;
      $scope.modalListSection = false;
    }else if(x == 3){
      $scope.newMenuSection.type = "list"
      $scope.modalFullSection = false;
      $scope.modalPartialSection = false;
      $scope.modalListSection = true;
    }
    console.log($scope.newMenuSection.type);
  }
  
    // adds a subtitle
    
    $scope.subtitleAdder = function(x){
      console.log(x);
      if((!$scope.newMenuSection.subtitle1) && (x == 1)){
        $scope.subtitle1 = true;
        $scope.subtitleAdder1 = false;
      }else if((!$scope.newMenuSection.subtitle2) && (x == 2)){
        $scope.subtitle2 = true;
        $scope.subtitleAdder2 = false;
      }else if((!$scope.newMenuSection.subtitle3) && (x == 3)){
        $scope.subtitle3 = true;
        $scope.subtitleAdder3 = false;
      }
    }
    
    $scope.subtitleSubtractor = function(x){
      if(x == 1){
        $scope.subtitle1 = false; 
        $scope.subtitleAdder1 = true;
        $scope.newMenuSection.subtitle1 = null; 
      }else if (x == 2){
        $scope.subtitle2 = false;
        $scope.subtitleAdder2 = true;
        $scope.newMenuSection.subtitle2 = null;  
      }else{
        $scope.subtitle3 = false;
        $scope.subtitleAdder3 = true;
        $scope.newMenuSection.subtitle3 = null;
      }
    }
    
    
    
  // NEW SECTION MODAL FUNCTIONS
  
  
  $scope.saveMenuSection = function(){
    if($scope.newMenuSection.title && $scope.newMenuSection.type){
      console.log($scope.newMenuSection);
      $scope.modalTrigger = false;
      $scope.newMenuSection.title = null;
      $scope.newMenuSection.type = null;
      $scope.newMenuSection.subtitle1 = null;
      $scope.newMenuSection.subtitle2 = null;
      $scope.newMenuSection.subtitle3 = null;
    }else {
        alert("Please Enter Valid Data");
        console.log($scope.newMenuSection);
      } 
    
    
  };
  
  
  
  
  // NEW ITEM MODAL FUNCTIONS
  $scope.saveMenuItem = function(){
    if($scope.newItem.title && $scope.newItem.description && $scope.newItem.price){
      console.log($scope.newItem);
      $scope.modalToggler = false;
      $scope.newItem.title = null;
      $scope.newItem.description = null;
      $scope.newItem.price = null;
    } else {
        alert("Please Enter Valid Data");
        console.log($scope.newItem);
      }
    
  }
  
});
