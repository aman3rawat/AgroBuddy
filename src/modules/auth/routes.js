const express = require('express');
const { login } = require('./controllers');
const { loginValidator } = require('./validators');
const productRoutes = express.Router();

productRoutes.post('/login', loginValidator, login);

module.exports = productRoutes;
