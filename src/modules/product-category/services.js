const Product_categories = require("../../models/product_categories");
const attributes = { exclude: ['created_date', 'updated_date'] }
module.exports = {
    'list': async (req, res, next) => {
        try {
            let data = [];
            if (req.query.id) {
                data = await Product_categories.findByPk(req.query.id);
            } else {
                data = await Product_categories.findAll({ raw: true, attributes });
            }
            return {
                status: true,
                data
            };
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    },
    'create': async (req, res, next) => {
        try {
            const data = await Product_categories.create(req.body);
            return {
                status: true,
                data
            };
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    },
    'update': async (req, res, next) => {
        try {
            const data = await Product_categories.findByPk(req.params.id);
            if (!data) {
                return res.status(404).send({ message: 'Product category not found!' });
            }
            const updateingData = {
                name: req.body?.name || data.name,
                descriptions: req.body?.descriptions || data.descriptions,
            }
            const updatedData = await Product_categories.update(updateingData, {
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
            const data = await Product_categories.findByPk(req.params.id);
            if (!data) {
                return res.status(404).send({ message: 'Product category not found!' });
            }
            await Product_categories.destroy({
                where: { id: req.params.id }
            });
            return {
                status: true,
                message: 'Product category deleted successfully'
            };
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    }
}
