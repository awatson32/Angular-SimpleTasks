var myApp = angular.module('myApp', ['myApp.controllers', 'ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/views/simpletasks.html',
        controller: 'ButtonController'
    })
    .when('/test', {
        templateUrl: '/views/test.html',
    })
    
}]);