var mongoose = require('mongoose');
var Router = require('express').Router;

var Conversation = require('../model/conversation.js');
var Message = require('../model/message.js');

module.exports = function() {
  let api = Router();

  // '/v1/conversations/new'
  api.post('/new', function(req, res) {

    let newConversation = new Conversation();
    newConversation.part1 = req.body.part1;
    newConversation.part2 = req.body.part2;

    newConversation.save(function(error) {
      if (error) {
        res.send(error);
      } else {
        res.json({ message: 'Conversation successfully created' });
      }
    });
  });

  // '/v1/conversations/messages/add/:id'
  api.post('/messages/add/:id', function(req, res) {
    Conversation.findById(req.params.id, function(error, conversation) {
      if (error) {
        res.send(error);
        return;
      }
      let newMessage = new Message();

      newMessage.timestamp = new Date().getTime();
      newMessage.sender = req.body.sender;
      mewMessage.msg = req.body.msg;

      conversation.messages.push(newMessage);
      conversation.save(function(error) {
        if (error) {
          res.send(error);
          return;
        }
        res.json({ message: 'Message has been sent' });
      });
    });
  });

  return api;
}
