const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('.');

module.exports = sequelize.define('Admin', {
    id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: true,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    created_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_date: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'admin',
    timestamps: false, // if you're not using Sequelize's createdAt/updatedAt
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        },
        beforeUpdate: async (user) => {
            if (user.changed('password')) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    }
});
