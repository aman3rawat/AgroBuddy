const express = require('express');
const { createValidator } = require('./validators');
const { list, create, del } = require('./controllers');
const { update } = require('./services');
const productRoutes = express.Router();

productRoutes.get('/', list);
productRoutes.post('/', createValidator, create);
productRoutes.put('/:id', createValidator, update);
productRoutes.delete('/:id', del);

module.exports = productRoutes;