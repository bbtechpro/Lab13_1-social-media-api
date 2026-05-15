// DEPENDENCIES
const express = require('express');
const app = express();
require('dotenv').config();
const { MongoClient } = require('mongodb');
const PORT = process.env.PORT || 3000;

// MIDDLEWARE

// DATABASE CONNECTION



// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Social Media API!');
});

// PORT: START SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});