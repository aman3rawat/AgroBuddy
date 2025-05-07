const ApiError = require("../../utils/apiError");
const catchAsync = require("../../utils/catchAsync");
const customResponse = require("../../utils/customResponse");
const { register } = require("./services");

console.log('user controller');

module.exports = {
    'login': (req, res, next) => {

    },
    'register': async (req, res, next) => {
        try {
            const data = await register(req, res, next);
            if (data.status) {
                return customResponse(res, data);
            } else {
                return next(new ApiError(data.statusCode, data.message));
            }
        } catch (error) {
            return next(error);
        }
    }
}
