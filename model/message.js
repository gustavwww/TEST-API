var mongoose = require('mongoose');

let Schema = mongoose.Schema;
let MessageSchema = new Schema({
  msg: {
    type: String,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  },
  sender: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Message', MessageSchema);
