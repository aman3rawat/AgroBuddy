const express = require('express');
const { create, list, del } = require('./controllers');
const { createValidator } = require('./validators');
const feedbackRoutes = express.Router();

feedbackRoutes.post('/', createValidator, create); // Create feedback
feedbackRoutes.get('/', list); // List all feedbacks
feedbackRoutes.delete('/:id', del); // Delete feedback by ID

module.exports = feedbackRoutes;
