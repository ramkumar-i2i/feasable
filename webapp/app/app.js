(function() {
    'use strict';
    /**
     * feasable app module
     */
    
    var app = angular.module("feasable", [
        "ui.router",
        "feasable.system",
        "feasable.landing",
        "feasable.sideMenu",
        "feasable.revenue",
        "feasable.feasiblity",
        "feasable.settings"
    ]);
})();