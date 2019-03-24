var mongoose = require('mongoose');

var Message = require('./message.js');

let Schema = mongoose.Schema;
let ConversationSchema = new Schema({
  part1: {
    type: String,
    required: true
  },
  part2: {
    type: String,
    required: true
  },
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

module.exports = mongoose.model('Conversation', ConversationSchema);
