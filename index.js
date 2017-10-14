const express = require('express');
const app = express();
var birds = require('./birds')

app.use('/birds', birds);

app.use('/users/:id', function(req, res, next){
	console.log('Application-level Middleware for /users/:id route - ', req.params.id);
	next();
});

app.get('/', function(req, res, next){
	res.send('Hello World!');
});

app.get('/users/:id', function(req, res){
	res.send(req.params.id);
})

app.get('/users', function(req, res){
	res.send('All users');
})

app.listen(3000 , function(){
	console.log('ExpressJS docs practice listening on the');
})