(async function () {
    try {
        require('dotenv').config();
        const app = require('./src/app');
        const PORT = process.env.PORT;
        try {
        const db = require('./src/models');
        const authenticated = await db.authenticate();
        console.log('isAuthenticated', authenticated, db.models);
       }catch(error){
        console.log('DB is not connected!', error);
        process.exit(1);
       }
        app.listen(PORT, () => {
            console.log('server is listening on port ', PORT);
        })
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})();
