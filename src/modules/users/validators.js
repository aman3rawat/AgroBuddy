const db = require("../../utils/db");

module.exports = {
    'register': async(req, res, next) => {
        try {
            const { userType, username, password } = req.body;
            if (!userType || !username || !password) {
                return { message: 'Validation Error on required fields userType username password' }
            }
            if (!['FARMER', 'ADMIN'].includes(userType)) {
                return { message: 'Validation Error on UserType' }
            }
            const userId = Math.ceil(Math.random * 1000000);
            const isInserted = await db('user', { userId, ...req.body });
            return {
                status: isInserted
            }
        } catch (error) {

        }
    }
}
