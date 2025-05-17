module.exports = {
    'create': async (req, res, next) => {
        try {
            const feedback = await Feedback.create(req.body);
            return res.status(201).json({
                status: true,
                data: feedback,
            });
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    list: async (req, res, next) => {
        try {
            const feedbacks = await Feedback.findAll();
            return res.status(200).json({
                status: true,
                data: feedbacks,
            });
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    delete: async (req, res, next) => {
        try {
            const feedback = await Feedback.findByPk(req.params.id);
            if (!feedback) {
                return res.status(404).json({ message: 'Feedback not found' });
            }

            await feedback.destroy();
            return res.status(200).json({
                status: true,
                message: 'Feedback deleted successfully',
            });
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    },
}