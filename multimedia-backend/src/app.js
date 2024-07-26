const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const themeRoutes = require('./routes/themeRoutes');
const contentRoutes = require('./routes/contentRoutes');
const connectDB = require('./config/db');

require('dotenv').config();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000', // Permite solicitudes desde este dominio
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));

connectDB();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/themes', themeRoutes);
app.use('/api/contents', contentRoutes);

module.exports = app;
