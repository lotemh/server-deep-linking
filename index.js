var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5001));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index', {
      'sectionUrl': request.query['section-url'],
      target: request.query.target
  });
});

app.get('/cat', function(request, response) {
    response.render('pages/cat');
});

app.get('/horse', function(request, response) {
    response.render('pages/horse');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


