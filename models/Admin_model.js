const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Admin extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Admin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncvrement: true
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
    }
  },
  {
    hooks: {
        beforeCreate: async (newAdminData) => {
          newAdminData.password = await bcrypt.hash(newAdminData.password, 10);
          return newAdminData;
        },
        beforeUpdate: async (updatedAdminData) => {
          if (updatedAdminData.password) {
          updatedAdminData.password = await bcrypt.hash(updatedAdminData.password, 10);
          }
          return updatedAdminData;
        },
      },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Admin',
  }
);

module.exports = Admin;