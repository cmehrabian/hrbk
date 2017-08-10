var express = require('express');
var db = require('../database');
var dbHelpers = require('../database/helpers')


var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
	console.log('process.env.PORT:', port);
});
