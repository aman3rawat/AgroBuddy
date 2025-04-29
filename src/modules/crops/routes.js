const express = require('express');
const { create } = require('./services');
const cropRoutes = express.Router();

cropRoutes.post('/login', create);

module.exports = cropRoutes;