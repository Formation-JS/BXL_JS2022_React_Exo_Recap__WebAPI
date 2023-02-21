import dotenv from 'dotenv';
import express from 'express';
import router from './routers/index.js';

// Variable d'environement
dotenv.config();
const { PORT } = process.env;

// Web API
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use('/api',router);

app.listen(PORT, () => {
    console.log(`Message Web API run on port ${PORT}`);
});