const { DataTypes } = require('sequelize');
const sequelize = require('.'); // Adjust the path to your database configuration

module.exports = sequelize.define('Order', {
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
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('PENDING', 'SHIPPED', 'SUCCESS'),
    allowNull: false,
    defaultValue: 'PENDING',
  },
  order_details: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'order',
  timestamps: false, // Disable Sequelize's automatic timestamps
  charset: 'utf8mb4',
  collate: 'utf8mb4_0900_ai_ci',
});
