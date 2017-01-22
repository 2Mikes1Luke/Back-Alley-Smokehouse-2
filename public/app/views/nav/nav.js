angular.module('bash')
    .directive('baNav', function() {
        return {
            restrict: 'E',
            templateUrl: './app/views/nav/nav.html',
            link: function(scope, element, attributes) {
                
              $(document).ready(function(){
              $(function() {
                // Select link by id and add click event
                $('#redcap').click(function() {

                  // Animate Scroll to #bottom
                  $('html,body').animate({
                    scrollTop: $("#mainNav").offset().top }, // Tell it to scroll to the top #bottom
                    10 // How long scroll will take in milliseconds
                  );

                  // Prevent default behavior of link
                  return false;
                });
              });
              
            });


            }
};

});