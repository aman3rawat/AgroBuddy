const { Sequelize } = require('sequelize');
const { DB_NAME, DB_HOST, DIALECT, DB_USER, DB_PASSWORD } = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DIALECT //mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.', sequelize.models);
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

// sequelize.sync({ force: false }).then(() => {
//     console.log('Database & tables created!');
// }
// ).catch(err => {
//     console.error('Unable to sync the database:', err);
//     process.exit(1);
// })

module.exports = sequelize;