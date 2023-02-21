const categoryController = require('../controllers/category.controller');

const categoryRouter = require('express').Router();

categoryRouter.route('/')
    .get(categoryController.getAll);

module.exports = categoryRouter;