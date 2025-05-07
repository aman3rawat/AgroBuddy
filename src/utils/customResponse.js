module.exports = (res, data)=>{
    data?.statusCode ? data?.statusCode : 200;
    return res.send(data.statusCode).json(data);
}