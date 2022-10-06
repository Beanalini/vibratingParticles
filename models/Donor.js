const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Donor model
class Donor extends Model {}

//fields/columns for Donor model
Donor.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      donor_num: {
        type: DataTypes.STRING,
        allowNull: false
      },   
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },   
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },      
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
      },
      contact_num: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
      },
      sex: {
        type: DataTypes.STRING

      },      
      dob: {
        type: DataTypes.DATE,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      
    },
    {
      //add hooks here to hash password before the db entry is created
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'donor'
    }
  );
  
  module.exports = Donor;