module.exports = function (error, req, res, next) {
    const statusCode = error?.statusCode || 500;
    return res.status(statusCode).json({
        status: false,
        statusCode: statusCode,
        message: error.message || 'Internal Server Error!'
    })
}
