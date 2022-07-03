
require('dotenv').config(); 
const express = require('express');
const connectDB = require('./utils/connectDB');
const app = express();

connectDB();

// MIDDLEWARES
app.use(express.json()); 

// ROUTES
app.use('/api/v1/author', require('./routes/author'))
app.use('/api/v1/book', require('./routes/book'))

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`app running on port ${PORT}`));