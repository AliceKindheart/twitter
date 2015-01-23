var express = require( 'express' );
var app = express();
var morgan = require( 'morgan');

app.use(morgan('dev'));

// :method :url :status :response-time ms - :res[content-length]

app.get('/', function (req, res) {
  res.send('Welcome to the edited page!')
})

app.get('/tweets', function (req, res) {
  res.send('Page does not exist.')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('server listening', host, port)

})