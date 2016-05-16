var express = require('express');
var open    = require('open');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');

global.app = express();
global.jsonfile = require('jsonfile');
global.uniqid = require('uniqid');


app.use(serveStatic('public', {'index':['index.html']}));
app.listen(3000);

open('http://localhost:3000');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app['routes'] = {};
app.routes['candidate'] = require('./routes/candidate');
app.routes['employee'] = require('./routes/employee');
app.routes['admin'] = require('./routes/admin');


for (var route in app.routes) { app.routes[route].init(); }
