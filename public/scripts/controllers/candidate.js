app.controller('CandidateCtrl',['$scope', 'CandidateService', '$rootScope', function($scope, CandidateService, $rootScope){

	$scope.msg = '';
	$scope.init = function() {
		$scope.username = '';
		$scope.skills = '';
		$scope.phonenumber = '';
	};

	$scope.submitCandidateData = function(){
		CandidateService.putData({
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