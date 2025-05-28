const app = require('express')();
const routes = require('./routes');
app.use(require('express').json());
app.set('view engine', 'ejs');
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
        return res.render('index', {
            title: 'Welcome to the API',
            message: 'This is the home page of the API. Use the /api/v1 endpoint to access the API.'
        });
    } catch (error) {
        console.log('Error in rendering home page:', error);
        res.status(503).send();
    }
})

module.exports = app;
