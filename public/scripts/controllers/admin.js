app.controller('AdminCtrl',['$scope', 'CandidateService', 'EmployeeService','AdminService', function($scope, CandidateService, EmployeeService, AdminService){
	$scope.currentScreen = 'login';
	$scope.arrCandidates = [];
	$scope.arrEmployess = [];
	$scope.assistResult = {};
	$scope.currentEmpId = 'no';

	$scope.init = function() {
		$scope.username = 'admin@admin';
		$scope.password = 'admin';
	};

	$scope.authenticateUser = function(){
		AdminService.authenticateUser({
			'username'        : $scope.username,
			'password'            : $scope.password,

		}).then(function(data){
			console.log(data)
			$scope.init();
			$scope.currentScreen = 'assist';
			$scope.fillCandidateData();
			$scope.fillEmployeeData();
		});
	};

	$scope.fillCandidateData = function(){
		CandidateService.getData().then(function(data){
			console.log(data);
			$scope.arrCandidates = data.data;
		});
	};

	$scope.fillEmployeeData = function(){
		EmployeeService.getData().then(function(data){
			console.log(data);
			$scope.arrEmployess = data.data;
			console.log($scope.arrEmployess)
		});
	};

	$scope.assign = function(empId) {
		// console.log(empId, $scope.arrCandidates)
		var empData = $scope.arrEmployess.filter(function(emp) {
			console.log(emp.Id, empId)
			return emp.Id === empId
		})[0];
		var candidatesData = $scope.arrCandidates.filter(function(candidate) {
			return candidate.stateValue === 'YES';
		});
		if(empData && candidatesData.length > 0) {
			var resultObj = {
				'eName' : empData.name,
				'skills': empData.skills,
				'candidates' : candidatesData
			}

			$scope.assistResult = resultObj;
			$scope.currentScreen = 'assist-result';
		}

	};

	$scope.init();
}]);