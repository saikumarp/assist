app.factory('EmployeeService', ['$http', function($http){
	var employee = {};

	employee.getData = function(){
		return $http({
			url: '/fetchEmployeesData',
			method: 'GET',
			header:{'content-type': 'text/json'}
		});
	};

	employee.putData = function(data) {
		return $http({
			url: '/saveEmployeeData',
			method: 'POST',
			data: data,
			header:{'content-type': 'text/json'}
		});
	};
	return employee;
}]);