const { login } = require("./services");

module.exports = {
    'login': async (req, res, next) => {
        try {
            const data = await login(req, res, next);
            if (data.status) {
                return res.status(200).send({
                    status: true,
                    statusCode: 200,
                    message: data?.message || 'Login successful',
                    data: data.data
                });
            } else {
                console.log('Error:', data);
                return res.status(404).send({ message: 'User not found!' });
            }
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    },
}