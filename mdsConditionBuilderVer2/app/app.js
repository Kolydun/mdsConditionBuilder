(function (angular) {
    'use strict';

    angular.module('myApp', [
        'ngRoute',
        'ngMaterial',
        'myApp.view2',
        'myApp.version',
    ]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
})(angular);