var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('ModulePage/testPage', {
			templateUrl: '/ModulePage/testPage.html',
			controller: 'pageOneController'
		});
}]);

app.controller('myAppController', function($scope){
	$scope.message = 'this is my first app';
});

app.controller('pageOneController', function($scope){
	$scope.message = 'this is my first page!!!';
});