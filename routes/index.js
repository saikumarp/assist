module.exports.init = function(){
	app.get('/hello', function(req, res){
		console.log('hey hello')
	});
};
