const express = require('express');
const { create } = require('./services');
const orderRoutes = express.Router();

orderRoutes.post('/login', create);

module.exports = orderRoutes;