const express = require('express');
const { createValidator, updateValidator } = require('./validators');
const { list, create, del, update } = require('./controllers');
const productRoutes = express.Router();

productRoutes.get('/', list);
productRoutes.post('/', createValidator, create);
productRoutes.put('/:id', updateValidator, update);
productRoutes.delete('/:id', del);

module.exports = productRoutes;