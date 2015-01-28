var express = require( 'express' );
var morgan = require('morgan');
var app = express();
var swig = require( 'swig');

var routes = require('./routes/');
app.use('/', routes);

app.use(morgan('dev'));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

//turns off caching
swig.setDefaults({ cache: false });

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('server listening', host, port)

})

var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('./tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

module.exports = router;


// app.get('/', function (req, res) {
//   var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// res.render( 'index', {title: 'Hall of Fame', people: people} );

// })

// app.get('/news', function (req, res) {
//    res.send('This is the news!')
// })

// app.get('/tweets/5', function (req, res) {
//    res.send('This is the tweet!')
// })


//this is a comment I added

//:method :url :status :response-time ms - :res[content-length]