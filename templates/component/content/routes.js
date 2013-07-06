exports = module.exports = function (app, lib) {


	//example
	app.get('/__info', lib('{{project}}').info);


	// catch-all
	app.all('*', function(req, res){
	  res.sendfile(app.get('views') + '/index.html');
	});


};