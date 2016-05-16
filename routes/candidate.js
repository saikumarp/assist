module.exports.init = function(){
	var candidateJson = 'DB/candidate.json';

	app.post('/saveCandidateData', function(req, res){
	 	jsonfile.readFile(candidateJson, function(err, jsonObj){
	 		req.body.Id = 'C' + uniqid();
	 	 	jsonObj ? (jsonObj.push(req.body)) : (jsonObj = [req.body]);
	 	 	res.send({'status': 'OK', 'message' : 'Welcome ' + req.body.name + ', your Id : ' + req.body.Id});
			jsonfile.writeFile(candidateJson, jsonObj, {spaces:2} , function (err) {
			 console.error(err)
			})
	 	})
	});

	app.get('/fetchCandidatesData', function(req, res){
	 	jsonfile.readFile(candidateJson, function(err, jsonObj){
	 		res.send(jsonObj ? jsonObj : []);
	 	})
	});
};
