/**
 * Created by Michael on 7/20/2017.
 */
var mod = angular.module("invoice",[]);
mod.controller("invoiceCtrl", function($scope, currencyService){
    $scope.prc = 1;
    $scope.qty = 1;
    $scope.total = function(c){
        return $scope.prc*$scope.qty*
            $scope.currList[c]/$scope.currList[$scope.curr];
    };
    $scope.currList = {};
    $scope.curr = "";

    currencyService.then(function(res){
        $scope.currList = res.cl; $scope.curr = res.base;
    });
})
mod.service("currencyService", function($http){
    return $http.get("http://api.fixer.io/latest").then(function(res){
        var obj = res.data;
        var currList = {};
        currList[obj.base] = 1;
        for (var key in obj.rates)currList[key] = obj.rates[key];
        return {cl : currList, base : obj.base}
    })
})
