const messageController = require('../controllers/message.controller');

const messageRouter = require('express').Router();

messageRouter.route('/')
    .get(messageController.getAll)
    .post(messageController.add);

module.exports = messageRouter;