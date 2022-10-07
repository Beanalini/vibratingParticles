
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the apppintment history model
class Appointment extends Model {}

// create fields/columns for appointment model
Appointment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      donor_id: {
        type: DataTypes.INTEGER,
        refernces:{
            model:'donor',
            key: 'id',
            unique: false
        }   
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false
      },
      attended: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        default: null
      },
      amount_donated: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },    
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },        
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'appointment'
    }
  );
  
  module.exports = Appointment;