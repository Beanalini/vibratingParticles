const { Admin } = require('../models');

const adminData = [
    {
      "employee_num": 1,
      "role": "Admin Manager",
      "first_name": "Sally",
      "last_name": "Smith",
      "location": "Birmingham",
      "password": "",
      "contact_num": "01211234567",
      "email": "s-smith@email.com"
    },
    {
      "employee_num": 2,
      "role": "Admin Coordinator",
      "first_name": "Michael",
      "last_name": "Jones",
      "location": "Manchester",
      "password": "",
      "contact_num": "01217654321",
      "email": "m-jones@email.com"
      },
    {
      "employee_num": 3,
      "role": "Admin Coordinator",
      "first_name": "Gemma",
      "last_name": "Atkins",
      "location": "Edinbourgh",
      "password": "",
      "contact_num": "01611234567",
      "email": "g-atkins@email.com"
      },
      {
      "employee_num": 4,
      "role": "Admin Assistant",
      "first_name": "Peter",
      "last_name": "Campbell",
      "location": "Bristol",
      "password": "",
      "contact_num": "01811234567",
      "email": "p-campbell@email.com"
      },
    {
      "employee_num": 5,
      "role": "Admin Assistant",
      "first_name": "Maria",
      "last_name": "Rodriguez",
      "location": "London",
      "password": "",
      "contact_num": "02071234567",
      "email": "m-rodriguez@email.com"
      },
  ]

const seedAdminData = () => Admin.bulkCreate(adminData);

module.exports = seedAdminData;