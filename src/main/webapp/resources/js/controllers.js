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
                url: "/accounts/newAccount",
                controller: "newAccountCtrl",
                templateUrl: "/resources/templates/newAccounts.html"
              })
        .state("operations", {
            url:"/operations",
            controller: "operationsCtrl",
            templateUrl: "/resources/templates/operations.html"

        }).state("replenishAccount", {
                url:"/operations/replenishAccount",
                controller: "replenishAccountCtrl",
                templateUrl: "/resources/templates/replenishAccount.html"

            }).state("transferMoney", {
                url:"/operations/transferMoney",
                controller: "transferMoneyCtrl",
                templateUrl: "/resources/templates/transferMoney.html"

            })
        .state("reports", {
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



    $scope.accountObjects = [
        {accountNumber: '3849584938', accountName: "Текущий счет физического лица", accountType: "Текущий счет", balance: '999', currency: 'USD'},
        {accountNumber: '5940392719', accountName: "Ощадный+", accountType: "Ощадный+", balance: '150000', currency: 'RUB'},
        {accountNumber: '7690104957', accountName: "Депозитный актив+", accountType: "Депозитный", balance: '13000', currency: 'UAN'},
        {accountNumber: '3849584938', accountName: "Текущий счет физического лица", accountType: "Текущий счет", balance: '999', currency: 'USD'},
        {accountNumber: '5940392719', accountName: "Ощадный+", accountType: "Ощадный+", balance: '150000', currency: 'RUB'},
        {accountNumber: '7690104957', accountName: "Депозитный актив+", accountType: "Депозитный", balance: '13000', currency: 'UAN'},
        {accountNumber: '3849584938', accountName: "Текущий счет физического лица", accountType: "Текущий счет", balance: '999', currency: 'USD'},
        {accountNumber: '5940392719', accountName: "Ощадный+", accountType: "Ощадный+", balance: '150000', currency: 'RUB'},
        {accountNumber: '7690104957', accountName: "Депозитный актив+", accountType: "Депозитный", balance: '13000', currency: 'UAN'},
        {accountNumber: '3849584938', accountName: "Текущий счет физического лица", accountType: "Текущий счет", balance: '999', currency: 'USD'},
        {accountNumber: '5940392719', accountName: "Ощадный+", accountType: "Ощадный+", balance: '150000', currency: 'RUB'},
        {accountNumber: '7690104957', accountName: "Депозитный актив+", accountType: "Депозитный", balance: '13000', currency: 'UAN'},
        {accountNumber: '3849584938', accountName: "Текущий счет физического лица", accountType: "Текущий счет", balance: '999', currency: 'USD'},
        {accountNumber: '5940392719', accountName: "Ощадный+", accountType: "Ощадный+", balance: '150000', currency: 'RUB'},
        {accountNumber: '7690104957', accountName: "Депозитный актив+", accountType: "Депозитный", balance: '13000', currency: 'UAN'},
        {accountNumber: '3849584938', accountName: "Текущий счет физического лица", accountType: "Текущий счет", balance: '999', currency: 'USD'},
    ];

    console.log("--- GlobalCtrl ---");
}]);


// ---- Account controller ----
bankSystem.controller('accountsCtrl', ['$scope', '$http', function ($scope, $http){

    console.log("--- AccountsCtrl ---");
}]);

// ---- newAccount controller ----
bankSystem.controller('newAccountCtrl', ['$scope', '$http', function ($scope, $http){
    $scope.currensyList = ["USD", "RUB", "UAN"];
    $scope.currency = "UAN";
    $scope.isAccountNameNotCorrect = false; // flag - is account name isn't correct - set false (correct by default)

    // create new account function
    $scope.createNewAccount = function(){
        // if account name isn't correct
        if($scope.accountName == undefined || $scope.accountName == ""){
            $scope.isAccountNameNotCorrect = true; // account name isn't correct
        } else{
            console.log("Create new account --- AccountName: " + $scope.accountName + " --- Currency: " + $scope.currency);
            $scope.isAccountNameNotCorrect = false; // account name is correct

            //do something
        }
    };


    console.log("--- newAccountCtrl ---");
}]);


//--------------------------------------------------------
// ---- Operations controller ----
bankSystem.controller('operationsCtrl', ['$scope', function($scope){
    console.log("--- OperationsCtrl ---");
}]);

// ---- Replenish account controller ----
bankSystem.controller('replenishAccountCtrl', ['$scope', '$http', function($scope, $http){
    $scope.isSumToReplenishNotCorrect = false;  // flag - is sum to replenish isn't correct - set false (correct by default)

    // function to replenish account
    $scope.replenishAccount = function(){
        // if sum to replenish isn't correct
        if($scope.sumToReplenish == undefined || $scope.sumToReplenish == ""){
            $scope.isSumToReplenishNotCorrect = true; // sum isn't correct
        } else{
            $scope.isSumToReplenishNotCorrect = false; // sum is correct

            /*$http({
                method : "POST",
                url : "/replenishAccount",
                data: {
                        sum : $scope.sumToReplenish
                      }
            }).then(
                function SuccessReplenish(response) {
                console.log("success replenish");
            },
                function ErrorReplenish(response) {
                    console.log("error replenish");
            });*/
        }

        console.log("Payment was successful: " + $scope.sumToTransfer);
    };

    console.log("--- replenishAccountCtrl ---");
}]);

// ---- Transfer money controller ----
bankSystem.controller('transferMoneyCtrl', ['$scope', function($scope){
    console.log("--- transferMoneyCtrl ---");
}]);


//--------------------------------------------------------
// ---- Reports controller ----
bankSystem.controller('reportsCtrl', ['$scope', function($scope){
    console.log("--- ReportsCtrl ---");
}]);