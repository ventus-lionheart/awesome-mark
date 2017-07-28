// Require express and path
var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');

var app = express();
app.use(bodyParser.json());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the app
var server = app.listen(process.env.PORT || 8080, function() {
	var port = server.address().port;
	console.log("App now running on port", port);
});
