import express from 'express';
import subjectRouter from './subject.router.js'

const router = express.Router();

router.use('/subject', subjectRouter);


export default router;