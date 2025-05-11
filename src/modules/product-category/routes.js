const express = require('express');
const { list, create, del, update } = require('./controllers');
const categoryRoutes = express.Router();

categoryRoutes.get('/', list);
categoryRoutes.post('/', create);
categoryRoutes.delete('/:id', del);
categoryRoutes.put('/:id', update);

module.exports = categoryRoutes;