//Set up server
var express    = require('express');
var methodOverride = require('method-override');
var ejs        = require('ejs');
var app        = express();
var db         = require('./db.js');
var bodyParser = require('body-parser')
// var path       = require('path')
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, "views"))
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//Listen on port 3000
app.listen(3000);

//Inform about setup when server running
console.log("Running on 3000!");

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/posts/new', function(req, res) {
	console.log(req,url)
	res.render('/posts/new')
});
