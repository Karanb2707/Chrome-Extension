// models/profile.js
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite' // This will create a file named "database.sqlite" in your project directory
});


const Profile = sequelize.define('Profile', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true
    },
    about: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: true
    },
    followerCount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    connectionCount: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

module.exports = Profile;
