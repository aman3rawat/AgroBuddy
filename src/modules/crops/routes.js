const express = require('express');
const { list, create, del, update } = require('./controllers');
const cropManagementRoutes = express.Router();

cropManagementRoutes.get('/', list);
cropManagementRoutes.post('/', create);
cropManagementRoutes.delete('/:id', del);
cropManagementRoutes.put('/:id', update);

module.exports = cropManagementRoutes;
