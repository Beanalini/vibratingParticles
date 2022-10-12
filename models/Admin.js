const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

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
      autoIncrement: true
    },
    employee_num: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    role: {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
  },
  {
    hooks: {
        beforeCreate: async (newAdminData) => {
          newAdminData.password = await bcrypt.hash(newAdminData.password, 10);
          return newAdminData;
        },
        beforeUpdate: async (updatedAdminData) => {          
          updatedAdminData.password = await bcrypt.hash(updatedAdminData.password, 10);
          return updatedAdminData;
        },
      },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'admin'
  }
);

module.exports = Admin;