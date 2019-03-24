var express = require('express');

var conversation = require('./controller/conversation.js');
var middleware = require('./middleware/middleware.js');

let router = express();

// Api Routes v1 (/v1)
router.use(middleware());

router.use('/conversations', conversation());

module.exports = router;
