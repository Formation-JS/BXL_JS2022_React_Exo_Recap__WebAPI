import express from 'express';
import categoryController from './../controllers/category.controller.js';

const categoryRouter = express.Router();

categoryRouter.route('/')
    .get(categoryController.getAll);


export default categoryRouter;