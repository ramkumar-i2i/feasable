(function() {
    'use strict';
    /**
     * @module feasable.system
     * @directive LandingDirective
     */    
    angular.module("feasable.landing")
    .directive("adjustContentHeight",["$window" ,function($window){
        return {
            restrict: 'A',
            link: function(scope, element, attr) {
                /*var windowHeight = angular.element($window).height();
                var headerHeight = $("#header").height();
                var contentHeight = windowHeight - headerHeight;
                console.log(contentHeight);
                $("#content").css('height', contentHeight);
                $('.content-container').css('height', contentHeight); */
            }

        }

    }]);
})();