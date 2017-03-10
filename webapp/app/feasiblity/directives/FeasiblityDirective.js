(function() {
    'use strict';

    /**
     * ngDirective FeasiblityDirective
     */

    angular.module("feasable.feasiblity")
    .directive("newFeasiblityPopup", function(){
        return {
            restrict: 'E',
            templateUrl : "./app/feasiblity/views/new-feasiblity.html"
        }
    })
})();