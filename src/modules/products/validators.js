const Joi = require('joi');

module.exports = {
    'createValidator': async (req, res, next) => {
        try {
            const schema = Joi.object({
                name: Joi.string().max(100).required().messages({
                    'string.empty': 'Product name is required',
                    'string.max': 'Product name must not exceed 100 characters',
                }),
                price: Joi.string().max(100).required().messages({
                    'string.empty': 'Price is required',
                    'string.max': 'Price must not exceed 100 characters',
                }),
                descriptions: Joi.string().optional().allow('').messages({
                    'string.base': 'Descriptions must be a string',
                }),
                p_type: Joi.string().valid('OFFLINE', 'ONLINE').optional().messages({
                    'any.only': 'Product type must be either OFFLINE or ONLINE',
                }),
                discount: Joi.string().max(6).optional().allow('').messages({
                    'string.max': 'Discount must not exceed 6 characters',
                }),
                quantity: Joi.string().max(10).optional().allow('').messages({
                    'string.max': 'Quantity must not exceed 10 characters',
                }),
                category_id: Joi.number().integer().required().messages({
                    'number.base': 'Category ID must be a number',
                    'any.required': 'Category ID is required',
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
    'updateValidator': async (req, res, next) => {
        try {
            const schema = Joi.object({
                name: Joi.string().max(100).optional().messages({
                    'string.max': 'Product name must not exceed 100 characters',
                }),
                price: Joi.string().max(100).optional().messages({
                    'string.max': 'Price must not exceed 100 characters',
                }),
                descriptions: Joi.string().optional().allow('').messages({
                    'string.base': 'Descriptions must be a string',
                }),
                p_type: Joi.string().valid('OFFLINE', 'ONLINE').optional().messages({
                    'any.only': 'Product type must be either OFFLINE or ONLINE',
                }),
                discount: Joi.string().max(6).optional().allow('').messages({
                    'string.max': 'Discount must not exceed 6 characters',
                }),
                quantity: Joi.string().max(10).optional().allow('').messages({
                    'string.max': 'Quantity must not exceed 10 characters',
                }),
                unit: Joi.string().optional().allow('').messages({
                    'string.max': 'Quantity must not exceed 10 characters',
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
    }
}
