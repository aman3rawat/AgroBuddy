module.exports = {
    'createValidator': async (req, res, next) => {
        try {
            const schema = Joi.object({
                name: Joi.string().max(100).optional().allow(null).messages({
                    'string.max': 'Name must not exceed 100 characters',
                }),
                descriptions: Joi.string().optional().allow(null).messages({
                    'string.base': 'Descriptions must be a string',
                }),
                created_date: Joi.date().optional().allow(null).messages({
                    'date.base': 'Created date must be a valid date',
                }),
                updated_date: Joi.date().optional().allow(null).messages({
                    'date.base': 'Updated date must be a valid date',
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
                name: Joi.string().max(100).optional().allow(null).messages({
                    'string.max': 'Name must not exceed 100 characters',
                }),
                descriptions: Joi.string().optional().allow(null).messages({
                    'string.base': 'Descriptions must be a string',
                }),
                created_date: Joi.date().optional().allow(null).messages({
                    'date.base': 'Created date must be a valid date',
                }),
                updated_date: Joi.date().optional().allow(null).messages({
                    'date.base': 'Updated date must be a valid date',
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