const { DataTypes } = require('sequelize');
const sequelize = require('.'); // Adjust the path to your database configuration

const ProductCategory = sequelize.define('ProductCategory', {
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: true,
    unique: true,
  },
  descriptions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  created_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'product_categories',
  timestamps: false, // Disable Sequelize's automatic timestamps
});

module.exports = ProductCategory;