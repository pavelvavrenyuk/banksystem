var bankSystem = angular.module('bankSystem', ['ui.router', 'ui.grid']);

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
            /*views:{
                "main":{

                }
            }*/
        }).state("operations", {
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
bankSystem.controller('globalCtrl', function($scope){
    console.log("--- GlobalCtrl ---");
});


// ---- Account controller ----
bankSystem.controller('accountsCtrl', ['$scope', '$http', function ($scope, $http){


    $scope.gridOptions = {
        columnDefs: [
            { field: 'name' },
            { field: 'amount', name: 'Number', cellFilter: 'fractionFilter' },
            { field: 'amount', name: 'Currency', cellFilter: 'currencyFilter:this' }
        ]
    };

    $http.get('data.json')
        .success(function (data) {
            $scope.gridOptions.data = data;
        });

    console.log("--- AccountsCtrl ---");
}]);

// ---- Operations controller ----
bankSystem.controller('operationsCtrl', function($scope){
    console.log("--- OperationsCtrl ---");
});


// ---- Reports controller ----
bankSystem.controller('reportsCtrl', function($scope){
    console.log("--- ReportsCtrl ---");
});