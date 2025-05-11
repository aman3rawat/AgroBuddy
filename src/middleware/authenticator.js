module.exports = (req, res, next) => {
    // Check if the request has a valid token
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({
            status: false,
            message: 'Unauthorized! No token provided.'
        });
    }

    // Verify the token (this is a placeholder, replace with actual verification logic)
    if (token !== 'valid-token') {
        return res.status(403).json({
            status: false,
            message: 'Forbidden! Invalid token.'
        });
    }

    // If the token is valid, proceed to the next middleware
    next();
}
