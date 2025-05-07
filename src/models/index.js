const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('agro_buddy', 'root', 'Root@123123', {
    host: 'localhost',
    dialect: 'mysql' //mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

module.exports = sequelize;