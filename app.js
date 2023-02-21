import dotenv from 'dotenv';
import router from './routers/index.js';
import cors from 'cors';

import express from 'express';
import('express-async-errors');

// Variable d'environement
dotenv.config();
const { PORT } = process.env;

// Web API
const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Message Web API run on port ${PORT}`);
});