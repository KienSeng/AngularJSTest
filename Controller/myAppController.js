var app = angular.module('myApp', ['ngRoute']);
app.controller('myAppController', function($scope){
	$scope.message = 'this is my first app';
});

app.controller('pageOneController', function($scope){
	$scope.message = 'this is my first page!!!';
});