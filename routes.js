/*
* Part I: Build request handlers for each page.
* @req: The HTTP request
* @res: writes output in reponse to the HTTP request
*/

// YOU MUST ADD A NEW HANDLER FOR EACH PAGE!

// setup main route
var getMain = function(req, res) {
  // Display a post
  res.render('main.ejs', {});
};

/*
* Setup the DB
*/

// Step 1: include the database from modls
var db = require('../models/myDB.js');

// Step 2: function to post results to database and get data from db
var postResults = function(req, res) {
  // Extract POSTed form data from the req
  // note: myInputField is defined in views/main.ejs
  var userInput = req.body.myInputField;
  // the DB lookup function has a callback that receives the results or error msg
  // the function called within db.lookup is its callback function
  db.lookup(userInput, "german", function(data, err) {
    if (err) {
      res.render('results.ejs', {theInput: userInput,
                                 message: err,
                                 result: null});
    } else if (data) {
      res.render('results.ejs', {theInput: userInput,
                                 message: null,
                                 result: data.translation});
    } else {
      res.render('results.ejs', {theInput: userInput,
                                 message: "Definition not found",
                                 result: null});
    }
  });
};




  // Display a page with 'theInput' blank filled in
  res.render('results.ejs', {theInput: x});
};



/*
* Part II: Build class that contains all the request handlers defined above
*/

// the class
var routes = {
  get_main: getMain,
  post_results: postResults
};

// Export the class
module.exports = routes;
