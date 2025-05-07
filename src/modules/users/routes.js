const express = require('express');
const { login, register } = require('./controllers');
const { registerValidator } = require('./validators');
const userRoutes = express.Router();

console.log('user routes');
userRoutes.post('/login', login);

userRoutes.post('/register', registerValidator, register);

module.exports = userRoutes;