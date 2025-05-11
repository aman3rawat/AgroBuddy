const user = require("../../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    'login': async (req, res, next) => {
        try {
            const { username, password } = req.body;
            const userExist = await user.findOne({ where: { username }, raw: true });
            if (!userExist?.username) {
                return { status: false, message: 'User not exist, Please register first!' }
            }
            const isPassValid = await bcrypt.compare(password, userExist.password);
            if (isPassValid) return { status: false, message: 'Password not matched!' }
            const token = JsonWebTokenError.sign({ id: userExist?._id || 100 }, process.env.JWT_KEY, {
                expiresIn: 86400,
            })
            return {
                status: true,
                token
            }
        } catch (error) {
            return next(error);
        }
    },
}