const Joi = require('joi');

module.exports = {
    'createValidator': async (req, res, next) => {
        try {
            const schema = Joi.object({
                name: Joi.string().max(100).required().messages({
                    'string.empty': 'Name is required',
                    'string.max': 'Name must not exceed 100 characters',
                }),
                intro: Joi.string().required().messages({
                    'string.empty': 'Intro is required',
                }),
                season_type: Joi.string().valid('RABI', 'KHARIF', 'ZAID').required().messages({
                    'any.only': 'Season type must be one of RABI, KHARIF, or ZAID',
                    'string.empty': 'Season type is required',
                }),
                soil_type: Joi.string().max(50).required().messages({
                    'string.empty': 'Soil type is required',
                    'string.max': 'Soil type must not exceed 50 characters',
                }),
                type: Joi.string().valid('OFFLINE', 'ONLINE').optional().default('OFFLINE').messages({
                    'any.only': 'Type must be either OFFLINE or ONLINE',
                }),
                propogation_time: Joi.string().max(10).optional().allow('').messages({
                    'string.max': 'Propagation time must not exceed 10 characters',
                }),
                description: Joi.string().required().messages({
                    'string.empty': 'Description is required',
                }),
                image: Joi.string().max(20).optional().allow('').messages({
                    'string.max': 'Image must not exceed 20 characters',
                }),
                video: Joi.string().max(20).optional().allow('').messages({
                    'string.max': 'Video must not exceed 20 characters',
                }),
                inter_cropping_type: Joi.string().max(100).required().messages({
                    'string.empty': 'Inter-cropping type is required',
                    'string.max': 'Inter-cropping type must not exceed 100 characters',
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
                    'string.max': 'Name must not exceed 100 characters',
                }),
                intro: Joi.string().optional().messages({
                    'string.empty': 'Intro is required',
                }),
                season_type: Joi.string().valid('RABI', 'KHARIF', 'ZAID').optional().messages({
                    'any.only': 'Season type must be one of RABI, KHARIF, or ZAID',
                    'string.empty': 'Season type is required',
                }),
                soil_type: Joi.string().max(50).optional().messages({
                    'string.empty': 'Soil type is required',
                    'string.max': 'Soil type must not exceed 50 characters',
                }),
                type: Joi.string().valid('OFFLINE', 'ONLINE').optional().default('OFFLINE').messages({
                    'any.only': 'Type must be either OFFLINE or ONLINE',
                }),
                propogation_time: Joi.string().max(10).optional().allow('').messages({
                    'string.max': 'Propagation time must not exceed 10 characters',
                }),
                description: Joi.string().optional().messages({
                    'string.empty': 'Description is required',
                }),
                image: Joi.string().max(20).optional().allow('').messages({
                    'string.max': 'Image must not exceed 20 characters',
                }),
                video: Joi.string().max(20).optional().allow('').messages({
                    'string.max': 'Video must not exceed 20 characters',
                }),
                inter_cropping_type: Joi.string().max(100).optional().messages({
                    'string.empty': 'Inter-cropping type is required',
                    'string.max': 'Inter-cropping type must not exceed 100 characters',
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
