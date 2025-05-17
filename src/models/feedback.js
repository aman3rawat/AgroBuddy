const { DataTypes } = require('sequelize');
const sequelize = require('.'); // Adjust the path to your database configuration
const User = require('./user'); // Import the User model

module.exports = sequelize.define('Feedback', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  fullName: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  mobile_no: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(40),
    allowNull: true,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  contact_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'feedback',
  timestamps: false, // Disable Sequelize's automatic timestamps
  charset: 'utf8mb4',
  collate: 'utf8mb4_0900_ai_ci',
});