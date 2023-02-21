import express from 'express';
import categoryRouter from './category.router.js'
import messageRouter from './message.router.js'

const router = express.Router();

router.use('/message', messageRouter);
router.use('/category', categoryRouter);


export default router;