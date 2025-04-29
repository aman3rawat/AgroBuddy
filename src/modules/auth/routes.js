const express = require('express');
const { create } = require('./services');
const authRoutes = express.Router();

authRoutes.post('/login', create);

module.exports = authRoutes;