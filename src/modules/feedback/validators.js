const Joi = require('joi');

module.exports = {
    'createValidator': async (req, res, next) => {
        try {
            const schema = Joi.object({
                fullName: Joi.string().max(100).optional().allow(null).messages({
                    'string.max': 'Full name must not exceed 100 characters',
                }),
                mobile_no: Joi.string().length(10).optional().allow(null).messages({
                    'string.length': 'Mobile number must be exactly 10 digits',
                }),
                email: Joi.string().email().max(40).optional().allow(null).messages({
                    'string.email': 'Email must be a valid email address',
                    'string.max': 'Email must not exceed 40 characters',
                }),
                message: Joi.string().optional().allow(null).messages({
                    'string.base': 'Message must be a string',
                }),
                contact_date: Joi.date().optional().allow(null).messages({
                    'date.base': 'Contact date must be a valid date',
                }),
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
