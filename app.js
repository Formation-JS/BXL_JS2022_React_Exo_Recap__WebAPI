require('dotenv').config();

// Variable d'environement
const { PORT } = process.env;

// Imports
const express = require('express');
const router = require('./routers');

// Web API
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use('/api',router);

app.listen(PORT, () => {
    console.log(`Message Web API run on port ${PORT}`);
});