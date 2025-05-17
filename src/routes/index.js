const Product = require('../models/product');
const ProductCategory = require('../models/product_categories');

const router = require('express').Router();

router.use('/home', async (req, res, next) => {
    try {
        const categories = await ProductCategory.findAll();
        const products = await Product.findAll();
        return res.status(200).json({
            statusCode: 200,
            data: {
                categories,
                products
            }
        })
    } catch (error) {
        healthcheck.message = error;
        res.status(503).send();
    }
});
router.use('/auth', require('../modules/auth/routes'));
router.use('/product', require("../modules/products/routes"));
router.use('/category', require('../modules/product-category/routes'));
router.use('/user', require('../modules/users/routes'));
router.use('/order', require('../modules/orders/routes'));
router.use('/cropManagement', require('../modules/crops/routes'))
router.use('/feedback', require('../modules/feedback/routes'));

module.exports = router;