const Donor = require('./Donor');
const Appointment = require('./Appointment');




//Donor has many appointments
Donor.hasMany(Appointment, {
    foreignKey: 'donor_id',
    onDelete:'CASCADE'
});

//appointment has one donor
Appointment.belongsTo(Donor, {
    foreignKey: 'donor_id',    
});


module.exports = { Donor, Appointment }

