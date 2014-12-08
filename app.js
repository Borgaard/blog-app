//Set up server
var express    = require('express');
var methodOverride = require('method-override');
var ejs        = require('ejs');
var app        = express();
var db         = require('./db.js');
var bodyParser = require('body-parser')
var path       = require('path')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"))
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


//Listen on port 8080
app.listen(8080);

//Inform about setup when server running
console.log("Running on 8080!");

app.get('/posts/new', function(req, res) {
	// console.log(req.url)
	res.render('posts/new')
});

//Set up routes, requests and responses
app.get('/', function(req, res) {
	//server renders index when receive request
	res.render('index');
});

app.get('/posts', function(req, res) {
	db.query("SELECT * from posts;", function(err, dbRes) {
		if(!err) {
			res.render('posts/index', {posts: dbRes.rows});
		}
	});
});

app.get('/posts/:id', function(req, res) {
	db.query("SELECT * FROM posts WHERE id =$1", [req.params.id], function(err, dbRes) {
		if(!err) {
			res.render('posts/show', {posts: dbRes.rows[0]});
		} else {
			console.log(err);
		}
	})
});

app.post('/posts', function(req, res) {
	db.query("INSERT INTO posts (topic, mainbody, comments, postday) VALUES ($1, $2, $3, now())", [req.body.topic, req.body.mainbody, req.body.comments], function(err, dbRes) {
		if (!err) {
			res.redirect('/posts');
		} else {
			console.log(err);
		}
	});
});

app.get('/posts/:id/edit', function(req, res) {
	db.query("SELECT * FROM posts WHERE id = $1", [req.params.id], function(err, dbRes) {
		if(!err) {
			res.render('posts/edit', {posts: dbRes.rows[0]});
		} else {
			console.log(err);
		}
	});
});

//comments
app.patch('/posts/:id', function(req, res) {
	db.query("UPDATE posts SET topic = $1, mainbody = $2, comments = $3 WHERE id = $4", [req.body.topic, req.body.mainbody, req.body.comments, req.params.id], function(err, dbRes) {
		if(!err) {
			res.redirect('/posts/' + req.params.id);
		} else {
			console.log(err);
		}
	});
});

//Edit posts
app.patch('/posts/:id', function(req, res) {
	db.query("UPDATE posts SET topic = $1, mainbody = $2, comments = $3 WHERE id = $4", [req.body.topic, req.body.mainbody, req.body.comments, req.params.id], function(err, dbRes) {
		if(!err) {
			res.redirect('/posts/' + req.params.id);
		} else {
			console.log(err);
		}
	});
});

app.delete('/posts/:id', function(req, res) {
	db.query("DELETE FROM posts WHERE id = $1", [req.params.id], function(err, dbRes) {
		if(!err) {
			res.redirect('/posts');
		}
	})
});














