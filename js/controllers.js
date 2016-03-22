var controllers = angular.module('myApp.controllers', []);

controllers.controller('ButtonController', ['$scope', function($scope) {
    $scope.alert =  function() {
        alert("You look nice today!");
    };
}]);

controllers.controller('ChangeColorController', ['$scope', function($scope) {
    $scope.changeColor = function() {
        
    }
}])