// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

//use ejs for views
app.set('view engine', 'ejs');

// index page
//res.render will look into views folder
app.get('/', function(req, res) {
  res.render('pages/index');
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));