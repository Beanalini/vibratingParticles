const { Admin } = require('../models');

const adminData = [
    {
      "first_name": "Sally",
      "last_name": "Smith",
      "location": "Birmingham",
      "password": "",
      "contact_num": "01211234567",
      "dob": "1970-01-01",
      "age": "52",
      "sex": "Female",
    },
    {
        "first_name": "Michael",
        "last_name": "Jones",
        "location": "Manchester",
        "password": "",
        "contact_num": "01217654321",
        "dob": "1980-04-05",
        "age": "42",
        "sex": "Male",
      },
    {
        "first_name": "Gemma",
        "last_name": "Atkins",
        "location": "Edinbourgh",
        "password": "",
        "contact_num": "01611234567",
        "dob": "1972-08-07",
        "age": "50",
        "sex": "Female",
      },
      {
        "first_name": "Peter",
        "last_name": "Campbell",
        "location": "Bristol",
        "password": "",
        "contact_num": "01811234567",
        "dob": "1992-10-08",
        "age": "30",
        "sex": "Male",
      },
    {
        "first_name": "Maria",
        "last_name": "Rodriguez",
        "location": "London",
        "password": "",
        "contact_num": "02071234567",
        "dob": "1985-08-07",
        "age": "37",
        "sex": "Female",
      },
  ]

const seedAdminData = () => Admin.bulkCreate(adminData);

module.exports = seedAdminData;