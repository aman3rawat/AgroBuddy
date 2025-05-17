const ApiError = require("../../utils/apiError");
const customResponse = require("../../utils/customResponse");
const { create, list, update } = require("./services");

module.exports = {
    'create': async (req, res, next) => {
        try {
            const data = await create(req, res, next);
            if (data.status) {
                return res.status(200).send({
                    status: true,
                    statusCode: 200,
                    message: 'Product categories retrieved successfully',
                    data: data.data
                });
            } else {
                console.log('Error:', error);
                return res.status(404).send({ message: 'Category not found!' });
            }
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    },
    'list': async (req, res, next) => {
        try {
            const data = await list(req, res, next);
            if (data.status) {
                return res.status(200).send({
                    status: true,
                    statusCode: 200,
                    message: 'Product categories retrieved successfully',
                    data: data.data
                });
            } else {
                console.log('Error:', error);
                return res.status(404).send({ message: 'Category not found!' });
            }
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    },
    'update': async (req, res, next) => {
        try {
            const data = await update(req, res, next);
            if (data.status) {
                return res.status(200).send({
                    status: true,
                    statusCode: 200,
                    message: 'Product categories retrieved successfully',
                    data: data.data
                });
            } else {
                console.log('Error:', error);
                return res.status(404).send({ message: 'Category not found!' });
            }
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    },
    'del': async (req, res, next) => {
        try {
            const data = await del(req, res, next);
            if (data.status) {
                return res.status(200).send({
                    status: true,
                    statusCode: 200,
                    message: 'Product categories retrieved successfully',
                    data: data.data
                });
            } else {
                console.log('Error:', error);
                return res.status(404).send({ message: 'Category not found!' });
            }
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    }
}
