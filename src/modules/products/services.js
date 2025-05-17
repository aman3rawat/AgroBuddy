const Product = require("../../models/product");
const Product_categories = require("../../models/product_categories");

module.exports = {
    'create': async (req, res, next) => {
        try {
            const isCategoryExist = await Product_categories.findByPk(req.body.category_id);
            if (!isCategoryExist) {
                return res.status(400).json({
                    status: false,
                    message: "Category not found"
                });
            }
            const product = await Product.create({
                ...req.body
            });
            return {
                status: true,
                data: product
            }
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    },
    'list': async (req, res, next) => {
        try {
            let data = [];
            if (req.query.id) {
                data = await Product.findByPk(req.query.id);
            } else {
                data = await Product.findAll({
                    raw: true,
                    include: [
                        {
                            model: Product_categories,
                            as: 'category',
                            attributes: [['name', 'category_name'], ['descriptions', 'category_descriptions']],
                        }
                    ],
                    attributes: { exclude: ['created_date', 'updated_date'] }
                });
            }
            return {
                status: true,
                data: data
            };
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    },
    'update': async (req, res, next) => {
        try {
            const data = await Product.findByPk(req.params.id);
            if (!data) {
                return res.status(404).send({ message: 'Product not found!' });
            }
            const updateingData = {
                name: req.body?.name || data.name,
                category_id: req.body?.category_id || data.category_id,
                description: req.body?.description || data.description,
                image: req.body?.image || data.image,
                video: req.body?.video || data.video,
                unit: req.body?.unit || data.unit
            }
            const updatedData = await Product.update(updateingData, {
                where: { id: req.params.id }
            });
            return {
                status: true,
                data: updatedData
            };
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    },
    'del': async (req, res, next) => {
        try {
            const data = await Product.findByPk(req.params.id);
            if (!data) {
                return res.status(404).send({ message: 'Product not found!' });
            }
            await Product.destroy({
                where: { id: req.params.id }
            });
            return {
                status: true,
                message: 'Product deleted successfully'
            };
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    }
}
