const router = require('express').Router();

router.use('/auth', require('../modules/auth/routes'));
router.use('/product', require("../modules/products/routes"));
router.use('/category', require('../modules/product-category/routes'));
router.use('/user', require('../modules/users/routes'));
router.use('/order', require('../modules/orders/routes'));
router.use('/cropManagement', require('../modules/crops/routes'))

module.exports = router;