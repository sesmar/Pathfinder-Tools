(function() {
    var app = angular.module('pathfinderApp', ['ngRoute']);

    // configure our routes
    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
        // route for the home page
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'mainController'
            })
            // route for the about page
            .when('/bestiary', {
                templateUrl: 'views/bestiary.html',
                controller: 'bestiaryController'
            })
            // route for the contact page
            .when('/spells', {
                templateUrl: 'views/spells.html',
                controller: 'spellsController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });
})();