const { list, create, update, del } = require("./services");

module.exports = {
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
                console.log('Error:', data);
                return res.status(404).send({ message: 'Category not found!' });
            }
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    },
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
                console.log('Error:', data);
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
                console.log('Error:', data);
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
                console.log('Error:', data);
                return res.status(404).send({ message: 'Category not found!' });
            }
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    }
}
