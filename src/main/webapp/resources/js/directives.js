var bankSystem = angular.module('bankSystem');

bankSystem.directive('selector', function() {

    return {
        // обязательно, для поддержки работы через элемент
        restrict: 'E',

        // заменить <photo> этим html
        templateUrl:'/resources/templates/listNumbersAccounts.html',
        replace: true,

        // наблюдение и манипулирование DOM
        link: function($scope, element, attrs) {
            // атрибуты именуются с применением «верблюжьей» нотации
            attrs.$observe('sizeValue', function(value) {
                var minItemsInList = 2;     // min list size
                var maxItemsInList = 10;    // max list size
                var countAccounts = $scope.accountObjects.length;   // length accounts for current user
                var sizeListSelectors = minItemsInList; // selected list size (default min list size)

                // if more than max list size
                if(countAccounts > maxItemsInList){
                    sizeListSelectors = maxItemsInList;// set selected list size to max list size
                }else{
                    // if more than min list size
                    if(countAccounts > 2){
                        sizeListSelectors = countAccounts;//set selected list size to min list size
                    }
                }

                // set size for selected list
                element.attr('size', sizeListSelectors);
                console.log("AccountsNumbersLength"+$scope.accountObjects.length);
            })
        }
    }
});