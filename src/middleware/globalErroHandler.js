
module.exports = function (error, req, res, next) {
    try {
        return res.status(error.statusCode || 500).json({
            status: false,
            statusCode: error.status || 500,
            message: error.message || 'Internal Server Error!'
        })
    } catch (error) { }
}