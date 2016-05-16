module.exports.init = function(){
	var employeeJson = 'DB/employee.json';

	app.post('/saveEmployeeData', function(req, res){
	 	jsonfile.readFile(employeeJson, function(err, jsonObj){
	 		req.body.Id = 'E' + uniqid();
	 	 	jsonObj ? (jsonObj.push(req.body)) : (jsonObj = [req.body]);
	 	 	res.send({'status': 'OK', 'message' : 'Welcome ' + req.body.name + ', your Id : ' + req.body.Id});
			jsonfile.writeFile(employeeJson, jsonObj, {spaces:2} , function (err) {
			 console.error(err)
			})
	 	})
	});

	app.get('/fetchEmployeesData', function(req, res){
	 	jsonfile.readFile(employeeJson, function(err, jsonObj){
	 		res.send(jsonObj ? jsonObj : []);
	 	})
	});
};
