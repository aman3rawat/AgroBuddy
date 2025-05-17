const { DataTypes } = require('sequelize');
const sequelize = require('.'); // Adjust the path to your database configuration

module.exports =  sequelize.define('CropManagement', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  intro: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
  season_type: {
    type: DataTypes.ENUM('RABI', 'KHARIF', 'ZAID'),
    allowNull: false,
  },
  soil_type: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  propogation_time: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT('long'),
    allowNull: true,
  },
  video: {
    type: DataTypes.TEXT('long'),
    allowNull: true,
  },
  inter_cropping_type: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  tableName: 'crop_management',
  timestamps: false, // Disable Sequelize's automatic timestamps
});
