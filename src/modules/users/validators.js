const Joi = require("joi");
module.exports = {
    'registerValidator': async (req, res, next) => {
        try {
            const schema = Joi.object({
                firstName: Joi.string().required().min(3),
                lastName: Joi.string().required(),
                password: Joi.string().required(),
                email: Joi.string().email().required(),
                phone: Joi.number(),
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
    }
}
