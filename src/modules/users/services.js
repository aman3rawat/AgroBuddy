const { Op } = require("sequelize");
const User = require("../../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    'list': async (req, res, next) => {
        try {
            console.log('user list service');
            const users = await User.findAll({
                attributes: ['id', 'first_name', 'last_name', 'email', 'mobile_no', 'username'],
                raw: true
            });
            return { status: true, data: users };
        }
        catch (error) {
            return next(error);
        }
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
            if (isUserExist?.email) {
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