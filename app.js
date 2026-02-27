const express = require('express');
const apiRouter = require('./routes');

const app = express();

// Global middleware
app.use(express.json());

// Mount master router
app.use('/api/v1', apiRouter);

module.exports = app;