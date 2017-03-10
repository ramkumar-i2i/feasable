(function(){
    'use strict';

    /**
     * @module feasable.sideMenu
     * @description
     * Route for side menu
     */
    angular.module("feasable.sideMenu").config(config);
    
    config.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];

    function config ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('revenue', {
                parent: 'landing',
                url: '/revenue',
                templateUrl: 'app/revenue/views/revenueFeasiblity.html',
                controller: 'RevenueController',
                controllerAs: 'revenueCtrl'
            })
            .state('revenueDashboard', {
                parent: 'landing',
                url: '/revenueDashboard',
                templateUrl: 'app/revenue/views/revenueDashboard.html'
            }); 
    }
})();