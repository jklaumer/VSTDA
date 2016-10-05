var app = angular.module("myApp", [])

    .controller("mainCtrl", function($scope) {
        $scope.tasklist = [];
        $scope.task = {};
        $scope.addTask = function() {
            $scope.tasklist.push(angular.copy($scope.task));
        }

    });










// ng-model
// ng-click
// ng-class
// ng-repeat
// {{}}
