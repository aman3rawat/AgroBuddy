module.exports = (res, data) => {
    try{
    data?.statusCode ? data?.statusCode : 200;
    console.log('Response:', data);
    return res.send(data.statusCode).send({ data });
    }catch (error) {
        console.log('Error:', error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
}