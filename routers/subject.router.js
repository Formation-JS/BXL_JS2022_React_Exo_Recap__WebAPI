import express from 'express';
import subjectController from '../controllers/subject.controller.js';

const subjectRouter = express.Router();

subjectRouter.route('/category')
    .get(subjectController.getCategories);

subjectRouter.route('/:categoryId/message')
    .get(subjectController.getMessages)
    .post(subjectController.addMessage);


export default subjectRouter;