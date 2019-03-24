var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var config = require('./config.js');
var database = require('./database.js');
var routes = require('./routes.js');

let app = express();
app.server = http.createServer(app);

app.use(bodyParser.json({
  limit: config.bodyLimit
}));

database(function(db) {
// Connected to database
  app.use('/v1', routes);

});

app.server.listen(config.port);
console.log('Started on port ' + app.server.address().port);

exports.default = app;
