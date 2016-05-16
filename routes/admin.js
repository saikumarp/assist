module.exports.init = function(){
	var adminjson = 'DB/admin.json';

	app.post('/authenticateUser', function(req, res){
		jsonfile.readFile(adminjson, function(err, obj){
			console.log(obj.username, req.body.username , obj.password , req.body.password)
			if(obj.username === req.body.username && obj.password === req.body.password) {
				res.send({'status': 'ok', 'msg': 'welcome :' + req.body.username});
			} else {
				res.send({'status': 'fail', 'msg': 'inValidUsername / Password'});
			}
		});
	});
};
