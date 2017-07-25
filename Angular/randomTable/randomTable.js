/**
 * Created by Андрей on 24.07.2017.
 */
var arr = [];
for(var i=0; i<5; i++){
    arr[i] = [];
    for(var j=0; j<5; j++){
        arr[i].push((2*Math.random()-1).toFixed(4))
    }
}

angular.module("randomTable",[])
    .controller("randomTableCtrl", function ($scope) {
        $scope.tbl = arr;
        $scope
    })
