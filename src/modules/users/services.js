const { Op, JSON } = require("sequelize");
const User = require("../../models/user");
const catchAsync = require("../../utils/catchAsync");
const bcrypt = require('bcrypt');
const customResponse = require("../../utils/customResponse");

module.exports = {
    'login': (req, res, next) => {

    },
    'register': async (req, res, next) => {
        try {
            console.log('register service');
            const { email, username, phone } = req.body;
            const isUserExist = await User.findOne({
                where: {
                    [Op.and]: [{ username }, { email }, { mobile_no: phone }],
                },
                raw: true
            });
            if (isUserExist?._id) {
                const duplicateKey = isUserExist.email == email ? 'email' : (isUserExist.mobile_no == phone ? 'mobile' : 'username');
                return {
                    status: false,
                    message: `User already exist with same ${duplicateKey}`
                }
            }
            req.body.password = await bcrypt.hash(req.body.password, 12);
            try {
                await User.create({
                    first_name: req.body.firstName,
                    last_name: req.body.lastName,
                    email: req.body.email,
                    mobile_no: req.body.phone,
                    username: req.body.username,
                    password: req.body.password
                });
            } catch (error) {
                console.log('DB create error!', error.message);
                return {
                    status: false,
                    message: error.message || 'User is not created!'
                }
            }
            return { status: true, message: 'User is created' };
        }
        catch (error) {
            return next(error);
        }
    }
}