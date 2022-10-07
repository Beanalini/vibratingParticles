const sequelize = require('../config/connection');
const { Donor, Appointment } = require('../models');

const donorData = require('./donorData.json');
const appointmentData = require('./appointmentData.json');




const seedAll = async () => {
  await sequelize.sync({ force: true });

  const donors = await Donor.bulkCreate(donorData, {
    //individualHooks: true,
    returning: true,
  });

  const appointments = await Appointment.bulkCreate(appointmentData, {
    //individualHooks: true,
    returning: true,
  });

     
  process.exit(0);
};

seedAll();
