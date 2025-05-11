const Joi = require("joi");

module.exports = {
    'loginValidator': async (req, res, next) => {
        try {
            const schema = Joi.object({
                password: Joi.string().required(),
                username: Joi.string().required(),
            });
            const { error } = await schema.validateAsync(req.body);
            if (error) {
                return {
                    status: false,
                    message: error.message
                }
            }
            next();
        } catch (error) {
            console.log(error);
            next(error);
        }
    },
}