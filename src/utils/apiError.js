module.exports = class ApiError extends Error{
    constructor(code, message){
        super(message);
        this.statusCode = code;
        this.status = `${code}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }   
}