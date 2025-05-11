const express = require('express');
const { list, create, del } = require('./controllers');
const cropManagementRoutes = express.Router();

cropManagementRoutes.get('/', list);
cropManagementRoutes.post('/', create);
cropManagementRoutes.delete('/:id', del);
cropManagementRoutes.put('/:id', create);

module.exports = cropManagementRoutes;
