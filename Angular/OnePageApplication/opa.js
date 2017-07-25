/**
 * Created by Андрей on 24.07.2017.
 */

var files=["sasha.html", "masha.html", "vasya.html"];

angular.module("opa", [])
    .controller("opaCtrl", function ($scope) {
        $scope.page = "sasha.html";
        $scope.pg = function (code) {
            $scope.page = files[code];
        }
    });
