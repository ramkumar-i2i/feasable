(function() {
    'use strict';

    /**
     * @module feasable.revenue
     * @controller RevenueController
     * @description 
     * consist of menu options in side bar
     */

    angular.module("feasable.revenue")
    .controller("RevenueController", revenueController);

    function revenueController() {
        var vm = this;
        vm.isToEdit = false;
    }

})();