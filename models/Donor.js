const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

//Donor model
class Donor extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }

}

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
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue:DataTypes.UUIDV4
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
        type: DataTypes.STRING,
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
        }
      },
        blood_type: {
          type: DataTypes.STRING,
          allowNull: false
      },      
      date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      
    },
    {
      //add hooks here to hash password before the db entry is created
      hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
        },
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'donor'
    }
  );
  
  module.exports = Donor;