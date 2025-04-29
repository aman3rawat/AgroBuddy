const express = require('express');
const router = express.Router();

const productRoutes = require("../modules/products/routes");
const userRoutes = require('../modules/users/routes');
const orderRoutes = require('../modules/orders/routes');

router.all('/prouduct', productRoutes);
router.all('/user', userRoutes);
router.all('/order', orderRoutes);


module.exports = router;