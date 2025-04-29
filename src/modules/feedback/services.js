module.exports = {
    'create': (req, res, next) => {
        try {
            console.log(req.body);
            const { username = '', password = '' } = req.body;
    
            if (username && password) {
                return res.status(200).json({
                    status: true,
                    message: 'Welcome to Javascript world!'
                })
            }
    
            res.json({
                status: false,
                message: 'Please provide credentials'
            })
        } catch (error) {
        }
    },
}