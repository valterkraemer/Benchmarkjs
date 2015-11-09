(function() {
  'use strict';

  var express = require('express');
  var app = express();

  var bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: true }));

  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');

  app.get('/', function(req, res) {
    res.render('index', {
      function1: '',
      function2: ''
    });
  });

  app.post('/', function(req, res) {

    res.render('index', {
      function1: req.body.function1,
      function2: req.body.function2
    });
  });

  app.use('/static', express.static('static'));

  var server = app.listen(process.env.PORT || 3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
  });

}());
