const express = require('express');
const { create } = require('./services');
const productRoutes = express.Router();

productRoutes.post('/login', create);

module.exports = productRoutes;
