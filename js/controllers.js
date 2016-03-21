var controllers = angular.module('myApp.controllers', []);

controllers.controller('ButtonController', ['$scope', function($scope) {
    $scope.alert =  function() {
        alert("You look nice today!");
    };
}]);