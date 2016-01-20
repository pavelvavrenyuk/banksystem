var bankSystem = angular.module('bankSystem', ['ngRoute']);
bankSystem.config(['$routeProvider', function(routeProvider) {
    routeProvider.
        when('/banksystem', {
            templateUrl: '/resources/templates/main.html',
            controller: 'MainCtrl'
        }).
        when('/login', {
            templateUrl: '/resources/templates/login-page.html',
            controller: 'LoginPageCtrl'
        }).
        when('/register', {
            templateUrl: '/resources/templates/register-page.html',
            controller: 'RegisterPageCtrl'
        }).
        /*when('/:countryName', {
         templateUrl: '/resources/templates/country-detail.html',
         controller: 'CountryDetailCtrl'
         }).*/
        otherwise({
            redirectTo: '/'
        });
}]);