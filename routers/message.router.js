import express from 'express';
import messageController from '../controllers/message.controller.js';

const messageRouter = express.Router();

messageRouter.route('/')
    .get(messageController.getAll)
    .post(messageController.add);


export default messageRouter;