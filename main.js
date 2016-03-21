var myApp = angular.module('myApp', ['myApp.controllers', 'ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'simpletasks.html',
        controller: 'ButtonController'
    });
    
}]);