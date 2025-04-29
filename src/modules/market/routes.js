const express = require('express');
const { create } = require('./services');
const marketRoutes = express.Router();

marketRoutes.post('/login', create);

module.exports = marketRoutes;