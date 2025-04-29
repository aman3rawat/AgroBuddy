const express = require('express');
const { create } = require('./services');
const paymentRoutes = express.Router();

paymentRoutes.post('/login', create);

module.exports = paymentRoutes;