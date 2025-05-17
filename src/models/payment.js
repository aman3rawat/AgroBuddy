const { DataTypes } = require('sequelize');
const sequelize = require('.'); // Adjust the path to your database configuration
const Order = require('./order'); // Import the Order model

module.exports = sequelize.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  type: {
    type: DataTypes.ENUM('OFFLINE', 'ONLINE'),
    allowNull: true,
    defaultValue: 'OFFLINE',
  },
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('PENDING', 'PAID', 'UNDER_PROCESS'),
    allowNull: true,
    defaultValue: 'PENDING',
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Order, // Reference the Order model
      key: '_id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
}, {
  tableName: 'payment',
  timestamps: false, // Disable Sequelize's automatic timestamps
  charset: 'utf8mb4',
  collate: 'utf8mb4_0900_ai_ci',
});