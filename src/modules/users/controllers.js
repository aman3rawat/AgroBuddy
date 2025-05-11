const { register, list } = require("./services");

module.exports = {
    'list': async (req, res, next) => {
        try {
            const data = await list(req, res, next);
            if (data.status) {
                return res.status(200).send({
                    status: true,
                    statusCode: 200,
                    message: 'User Data retrieved successfully',
                    data: data.data
                });
            } else {
                return res.status(404).send({ message: 'Users not found!' });
            }
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    },
    'register': async (req, res, next) => {
        try {
            const data = await register(req, res, next);
            if (data.status) {
                return res.status(200).send({
                    status: true,
                    statusCode: 200,
                    message: 'User Registered successfully',
                    data: data.data
                });
            } else {
                return res.status(404).send({ message: 'User not found!' });
            }
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    }
}
