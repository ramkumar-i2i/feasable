(function() {
    'use strict';

    /**
     * @module feasable.settings
     * @route feasable.settings
     * @description
     * Route to settings
     */
    
    angular.module("feasable.settings")
    .config(config);
    
    config.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];

    function config ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('profile', {
                parent: 'landing',
                url: '/profile',
                templateUrl: 'app/profile/views/profile.html'
            }); 
    }

})();