const router = require('express').Router();
const productRoutes = require("../modules/products/routes");
const userRoutes = require('../modules/users/routes');
const orderRoutes = require('../modules/orders/routes');

router.use('/product', productRoutes);
router.use('/user', userRoutes);
router.use('/order', orderRoutes);

module.exports = router;