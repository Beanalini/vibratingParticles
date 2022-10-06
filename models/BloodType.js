const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Doner model
class BloodType extends Model {}

// create fields/columns for Blood type model
BloodType.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      blood_type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      doner_id: {
        type: DataTypes.INTEGER,
        refernces:{
            model:'donor',
            key: 'id',
            unique: false
        }        
      },
      
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'bloodtype'
    }
  );
  
  module.exports = BloodType;