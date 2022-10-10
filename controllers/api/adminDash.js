const router = require('express').Router();
const { Donor, Appointment, Admin } = require('../../models');
const withAuth = require('../../utils/auth');

// withAuth removed during development stage for testing
// session was not used as session was under Admin and not Donor

//TO DO: Get admin data to display on board e.g. name, role, location, employee ID

router.get('/data', async (req, res) => {
  try {
    const adminData = await Admin.findAll();
    res.status(200).json(adminData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//TO DO Get all patients by certain blood type

router.get('/adminData/bloodType', async (req, res) => {
    
  try {
      const donorData = await bloodType.findOne({
        where: {id: req.query.bloodType,
      }});
      res.render ('bloodtype', {bloodtype});
    } catch (err) {
      console.log(error);
      res.status(500).json(err);
    }
});
  
//TO DO: view patient by ID
router.get('/donorId', async (req, res) => {
  try {
    const byDonorId = await Donor.findAll({
      attributes: {exclude: ['password']}
    });

    res.status(200).json(byDonorId);
    console.log(byDonorId);
  } catch (err) {
    res.status(500).json(err);
  }
});

//TO DO: update donor's record to indicate they attended their appoinment
router.put('/appointment/:id', async (req, res) => {
  try {
    const updatedDonor = await Appointment.update({
      date: req.body.date,
      time: req.body.time,
      attended: req.body.attended,
      amount_donated: req.body.amount_donated
    },
    {
      where: {
        id: req.params.id
      }
    }) 
      res.status(200).json(updatedDonor);
  } catch (err) {
    res.status(500).json(err);
  }
});

//TO DO: update a donor's record to indicate how much blood they donated - work required
router.get('/Record', async (req, res) => {
  try {
    const totalDonated = await Appointment.findAll({
      where: {
        donor_id: req.body.donor_id
      },
      attributes: [[sequelize.fn('SUM', sequelize.col('amount_donated')), 'total_donated']]
    })
    res.status(200).json(totalDonated);
  } catch (err) {
    res.status(500).json(err);
  }
});

//TO DO: view patients donating today

//TO DO: create new appointment
router.post('/newAppointment', async (req, res) => {
  try {
    const newAppDate = await Appointment.create({
      donor_num: req.body.donor_num,
      date: req.body.date,
      time: req.body.time,
  });
    res.status(200).json(newAppDate);
  } catch (err) {
    res.status(500).json(err);
  }
});

//TO DO: Delete donor's account
router.delete('/deleteAccount', async (req, res) => {
  try {
    const deletedDonor = await Donor.destroy({
      where: {
        donor_num: req.body.donor_num,
      },
    });
    res.status(200).json(deletedDonor);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;