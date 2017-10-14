var express = require('express');
var router = express.Router();


var logTime = function(req, res, next) {
	console.log('Bird Time logged for', req.path)
	console.log('Bird route accessed at: ', Date.now());
	next();
}

router.use(logTime);

router.get('/', function(req, res){
	res.send('Birds Home Page');
});

router.get('/about', function(req, res){
	res.send('Birds About Page');
});

module.exports = router;