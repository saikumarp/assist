app.factory('CandidateService', ['$http', function($http){
	var candidate = {};

	candidate.getData = function(){
		return $http({
			url: '/fetchCandidatesData',
			method: 'GET',
			header:{'content-type': 'text/json'}
		});
	};

	candidate.putData = function(data) {
		return $http({
			url: '/saveCandidateData',
			method: 'POST',
			data: data,
			header:{'content-type': 'text/json'}
		});
	};
	return candidate;
}]);