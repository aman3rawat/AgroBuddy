const { DataTypes } = require('sequelize');
const sequelize = require('.'); // Adjust the path to your database configuration
const ProductCategory = require('./product_categories'); // Import the ProductCategory model

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ProductCategory, // Reference the ProductCategory model
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  price: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  descriptions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  discount: {
    type: DataTypes.STRING(6),
    allowNull: true,
  },
  quantity: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  unit: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
}, {
  tableName: 'product',
  timestamps: false, // Disable Sequelize's automatic timestamps
  charset: 'utf8mb4',
  collate: 'utf8mb4_0900_ai_ci',
});

Product.hasOne(ProductCategory, {
  foreignKey: 'id',
  sourceKey: 'category_id',
  as: 'category', // Alias for the association
});

module.exports = Product;