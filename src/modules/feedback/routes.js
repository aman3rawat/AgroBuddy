const express = require('express');
const { create } = require('./services');
const feedbackRoutes = express.Router();

feedbackRoutes.post('/login', create);

module.exports = feedbackRoutes;