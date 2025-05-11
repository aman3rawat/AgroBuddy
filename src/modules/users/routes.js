const express = require('express');
const { list, register } = require('./controllers');
const { registerValidator, loginValidator } = require('./validators');
const userRoutes = express.Router();

userRoutes.get('/', list);
userRoutes.post('/', registerValidator, register);

module.exports = userRoutes;