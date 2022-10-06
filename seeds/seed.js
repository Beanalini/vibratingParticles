const sequelize = require('../config/connection');
const { Donor, Appointment, BloodType } = require('../models');

const donorData = require('./donorData.json');
const appointmentData = require('./appointmentData.json');
const bloodTypeData = require('./appointmentData.json');

console.log(Donor);

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const doners = await Donor.bulkCreate(donorData, {
    //individualHooks: true,
    returning: true,
  });

  const appointments = await Appointment.bulkCreate(appointmentData, {
    //individualHooks: true,
    returning: true,
  });

  const blood = await BloodType.bulkCreate(bloodTypeData, {
    //individualHooks: true,
    returning: true,
  });

    
  process.exit(0);
};

seedAll();
