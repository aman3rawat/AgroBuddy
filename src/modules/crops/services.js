const cropManagement = require("../../models/crop-management");

module.exports = {
    'list': async (req, res, next) => {
        try {
            let data = [];
            if (req.query.id) {
                data = await cropManagement.findByPk(req.query.id);
            } else {
                data = await cropManagement.findAll({
                    raw: true,
                    attributes: { exclude: ['created_date', 'updated_date'] }
                });
            }
            return {
                status: true,
                data: data
            };
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    },
    'create': async (req, res, next) => {
        try {
            const data = await cropManagement.create(req.body);
            return {
                status: true,
                data: data
            };
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    },
    'update': async (req, res, next) => {
        try {
            const data = await cropManagement.findByPk(req.params.id);
            if (!data) {
                return res.status(404).send({ message: 'Crop Data not found!' });
            }
            const updateingData = {
                name: req.body?.name || data.name,
                intro: req.body?.intro || data.intro,
                season_type: req.body?.season_type || data.season_type,
                soil_type: req.body?.soil_type || data.soil_type,
                type: req.body?.type || data.type,
                propogation_time: req.body?.propogation_time || data.propogation_time,
                description: req.body?.description || data.description,
                image: req.body?.image || data.image,
                video: req.body?.video || data.video,
                inter_cropping_type: req.body?.inter_cropping_type || data.inter_cropping_type,
            }
            const updatedData = await cropManagement.update(updateingData, {
                where: { id: req.params.id }
            });
            return {
                status: true,
                data: updatedData
            };
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    },
    'del': async (req, res, next) => {
        try {
            const data = await cropManagement.destroy({
                where: { id: req.params.id }
            });
            return {
                status: true,
                data: data
            };
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).send({ message: 'Internal Server Error' });
        }
    }
}
