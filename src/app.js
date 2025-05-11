const app = require('express')();
const routes = require('./routes');

app.use(require('express').json());
app.use('/api/health', (req, res) => {
    try {
        return res.status(200).json({
            statusCode: 200,
            data: {
                uptime: process.uptime(),
                message: 'OK',
                timestamp: Date.now()
            }
        })
    } catch (error) {
        healthcheck.message = error;
        res.status(503).send();
    }
});

app.use('/api/v1', routes);
// app.use(globalErrorHandler);
app.use('/', (req, res) => {
    try {
        return res.status(404).json({
            statusCode: 404,
            message: `${req.url} route does not exist`
        })
    } catch (error) {
        healthcheck.message = error;
        res.status(503).send();
    }
})

module.exports = app;
