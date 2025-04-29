const express = require('express');
const { create } = require('./controllers');
const orderRoutes = express.Router();

orderRoutes.post('/create', create);

module.exports = orderRoutes;