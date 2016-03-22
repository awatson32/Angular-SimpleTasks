var controllers = angular.module('myApp.controllers', []);

controllers.controller('ButtonController', ['$scope', function($scope) {
    $scope.alert =  function() {
        alert("You look nice today!");
    };
}]);

controllers.controller('ChangeColorController', ['$scope', function($scope) {
    $scope.changeColor = function() {
        
    }
}]);

controllers.controller('FriendsListController', ['$scope', function($scope) {
    $scope.friends = ["Jerica", "Rachel", "Emily", "Andrew", "Otto", "Cody", "Glen", "Jeff", "Jay", "Jackson"];
    $scope.showFriends = function() {
        
    }
}])