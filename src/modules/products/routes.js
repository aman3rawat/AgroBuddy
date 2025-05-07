const express = require('express');
const { create } = require('./services');
const productRoutes = express.Router();
console.log('product routes');

productRoutes.post('/login', create);

module.exports = productRoutes;