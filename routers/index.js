const categoryRouter = require('./category.router');
const messageRouter = require('./message.router');

const router = require('express').Router();


router.use('/message', messageRouter);
router.use('/category', categoryRouter);

module.exports = router;