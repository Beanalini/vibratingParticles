const Donor = require('./Donor');
const BloodType = require('./BloodType');
const Appointment = require('./Appointment');


// Donor has one BloodType 
Donor.hasOne(BloodType, {
  foreignKey: 'donor_id',
  onDelete:'CASCADE'
});

// BloodType belongs to Donor
BloodType.belongsTo(Donor, {
  foreignKey: 'donor_id',
});

//Donor has many appointments
Donor.hasMany(Appointment, {
    foreignKey: 'donor_id',
    onDelete:'CASCADE'
});

//appointment has one donor
Appointment.belongsTo(Donor, {
    foreignKey: 'donor_id',    
});


module.exports = { Donor, BloodType, Appointment }

