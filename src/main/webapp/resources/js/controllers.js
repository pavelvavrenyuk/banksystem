var bankSystem = angular.module('bankSystem', ['ui.router', 'smart-table']);

bankSystem.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/accounts");
    //
    // Now set up the states
    $stateProvider
        .state('accounts', {
            url: "/accounts",
            controller: "accountsCtrl",
            templateUrl: "/resources/templates/accounts.html"
        }).state('newAccount', {
                url: "/newAccount",
                controller: "newAccountCtrl",
                templateUrl: "/resources/templates/newAccounts.html"
              })
        .state("operations", {
            url:"/operations",
            controller: "operationsCtrl",
            templateUrl: "/resources/templates/operations.html"

        }).state("reports", {
            url:"/reports",
            controller: "reportsCtrl",
            templateUrl: "/resources/templates/reports.html"
        })

});


//-------------------------------------------------------------------
//--------------------- CONTROLLERS ---------------------------------
//-------------------------------------------------------------------

// ---- Global controller ----
bankSystem.controller('globalCtrl', ['$scope', '$http', function($scope, $http){

    $scope.english = "English";
    $scope.russian = "Русский";

    // function for set data transfer by selected language
    $scope.setDataByLanguage = function(language){
        $scope.translationFileName = "/resources/data/translations/translation_" + language + ".json";

        $http.get($scope.translationFileName).success(function(data, status, headers, config) {
            $scope.dataTransfer = data;
        });
    }

    // set default language
    $scope.language = 'en';

    // set data transfer by default language
    $scope.setDataByLanguage($scope.language);

    // when the language is changed
    $scope.changeLanguage = function(){
        $scope.setDataByLanguage($scope.language);
        console.log("change language: " + $scope.language);
    };



    console.log("--- GlobalCtrl ---");
}]);


// ---- Account controller ----
bankSystem.controller('accountsCtrl', ['$scope', '$http', function ($scope, $http){

    $scope.rowCollection = [
        {accountNumber: '3849584938', balance: '999', currency: 'USD'},
        {accountNumber: '5940392719', balance: '150000', currency: 'RUB'},
        {accountNumber: '7690104957', balance: '13000', currency: 'UAN'},
        {accountNumber: '3849584938', balance: '999', currency: 'USD'},
        {accountNumber: '5940392719', balance: '150000', currency: 'RUB'},
        {accountNumber: '7690104957', balance: '13000', currency: 'UAN'},
        {accountNumber: '3849584938', balance: '999', currency: 'USD'},
        {accountNumber: '5940392719', balance: '150000', currency: 'RUB'},
        {accountNumber: '7690104957', balance: '13000', currency: 'UAN'},
        {accountNumber: '3849584938', balance: '999', currency: 'USD'},
        {accountNumber: '5940392719', balance: '150000', currency: 'RUB'},
        {accountNumber: '7690104957', balance: '13000', currency: 'UAN'},
        {accountNumber: '3849584938', balance: '999', currency: 'USD'},
        {accountNumber: '5940392719', balance: '150000', currency: 'RUB'},
        {accountNumber: '7690104957', balance: '13000', currency: 'UAN'},
        {accountNumber: '3849584938', balance: '999', currency: 'USD'},
        {accountNumber: '5940392719', balance: '150000', currency: 'RUB'},
        {accountNumber: '7690104957', balance: '13000', currency: 'UAN'},
        {accountNumber: '3849584938', balance: '999', currency: 'USD'},
        {accountNumber: '5940392719', balance: '150000', currency: 'RUB'},
        {accountNumber: '7690104957', balance: '13000', currency: 'UAN'},
        {accountNumber: '3849584938', balance: '999', currency: 'USD'},
        {accountNumber: '5940392719', balance: '150000', currency: 'RUB'},
        {accountNumber: '7690104957', balance: '13000', currency: 'UAN'},
        {accountNumber: '3849584938', balance: '999', currency: 'USD'},
        {accountNumber: '5940392719', balance: '150000', currency: 'RUB'},
        {accountNumber: '7690104957', balance: '13000', currency: 'UAN'}
    ];

    console.log("--- AccountsCtrl ---");
}]);

// ---- newAccount controller ----
bankSystem.controller('newAccountCtrl', ['$scope', '$http', function ($scope, $http){
    console.log("--- newAccountCtrl ---");
}]);

// ---- Operations controller ----
bankSystem.controller('operationsCtrl', function($scope){
    console.log("--- OperationsCtrl ---");
});


// ---- Reports controller ----
bankSystem.controller('reportsCtrl', function($scope){
    console.log("--- ReportsCtrl ---");
});