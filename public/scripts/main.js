var app = angular.module('assistApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider
	.when('/home', {
		templateUrl: 'views/home.html'
	})
	.when('/candidate', {
		templateUrl: 'views/candidate.html'
	})
	.when('/employee', {
		templateUrl: 'views/employee.html'
	})
	.when('/admin', {
		templateUrl: 'views/admin.html'
	})
	.otherwise({redirectTo:'/home'});

}]);

app.run(['$location', '$rootScope', function($location, $rootScope){
	$location.path('/home');
	$rootScope.msg = '';
}]);