
/**
 * Module dependencies.
 */

var express = require('express')
  , util = require('util')
  , cons = require('consolidate')
  , app = express();

// configure

app.engine('swig', cons.swig);
app.set('view engine', 'swig');
app.set('views', __dirname + '/views');
app.set('port', process.env.PORT || process.argv[2] || 3000);
app.set('ip', process.env.IP || undefined);


app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.static(__dirname + '/build'));
app.use(app.router);

//config dev
app.configure('development', function(){
  app.use(express.errorHandler());
});


//load routes
require('./routes')(app, function(libName){
	return require(__dirname + '/lib/' + libName);
});


// bind

app.listen(app.get('port'), app.get('ip'), function(){
	util.log(util.format('listening on %s:%s', app.get('ip') || "*", app.get('port')));
});


process.on('uncaughtException', function(err) {
  console.error(process.pid + " " + err.stack);
});

