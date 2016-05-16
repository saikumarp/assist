app.factory('AdminService', ['$http', function($http){
	var admin = {};

	admin.authenticateUser = function(data) {
		return $http({
			url: '/authenticateUser',
			method: 'POST',
			data: data,
			header:{'content-type': 'text/json'}
		});
	};
	return admin;
}]);