/*
* Part I: Initialization
*/
var express = require('express');
// bring in code from routes folder
var routes = require('./routes/routes.js');

app.use(express.bodyParser());
app.use(express.logger("default"));

/*
* Part II: Route URL requests to a specific function that handles them
* Note: A route is required for each page the application has 
*/
app.get('/', routes.get_main);
app.post('/results', routes.post_results);

/*
* Part III: Start the server
*/
app.listen(8080);
console.log('Server running on port 8080');
