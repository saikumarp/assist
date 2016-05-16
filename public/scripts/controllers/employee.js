app.controller('EmployeeCtrl',['$scope','EmployeeService', '$rootScope',  function($scope, EmployeeService, $rootScope){
	$scope.msg = '';
	$scope.init = function() {
		$scope.username = '';
		$scope.skills = '';
		$scope.phonenumber = '';
	};

	$scope.submitEmployeeData = function(){
		EmployeeService.putData({
			'name'        : $scope.username,
			'skills'      : $scope.skills,
			'phonenumber' : $scope.phonenumber

		}).then(function(data){
			console.log(data)
			$scope.msg = data.data.message;
			$scope.init();
		});
	};

	$scope.init();
}]);