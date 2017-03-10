(function() {
    'use strict';

    /**
     * @config 
     * @module feasable.system
     * @description 
     * system configuration for routing
     */
    
    angular.module("feasable.system").config(config);
    
    config.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];

    function config ($stateProvider, $urlRouterProvider) {
       $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('landing', {
                url: '/home',
                templateUrl: 'app/system/views/system.html'
            }); 
    }
})();