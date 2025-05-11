require('dotenv').config();
const PORT = process.env.PORT;
require('./src/models');

try {
    const app = require('./src/app');
    app.listen(PORT, () => {
        console.log('server is listening on port ', PORT);
    })
} catch (error) {
    console.log(error);
    process.exit(1);
}
