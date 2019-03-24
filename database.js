var mongoose = require('mongoose');
var config = require('./config.js');



module.exports = function(callback) {
  let db = mongoose.connect(config.mongoUrl, { useNewUrlParser: true } );
  callback(db);
}
