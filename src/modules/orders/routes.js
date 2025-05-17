const express = require('express');
const { create, list } = require('./controllers');
const orderRoutes = express.Router();

orderRoutes.post('/', create);
orderRoutes.get('/', list);

module.exports = orderRoutes;