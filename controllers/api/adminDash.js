const router = require('express').Router();
const { Donor, Appointment, Admin } = require('../../models');
const withAuth = require('../../utils/auth');


//TO DO: Get admin data to display on board e.g. name, role, location, employee ID

router.get('/data', withAuth, async (req, res) => {
  try {
    const adminData = await Admin.findByPk(req.session.findAll() {
      attributes: { exclude: ['password'] }

    });
    res.status(200).json(adminData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//TO DO Get all patients by certain blood type

router.get('/adminData/bloodType', withAuth, async (req, res) => {
    
  try {
      const donorData = await bloodType.findOne({
        where: {id: req.query.bloodType,
      });
      res.render ('bloodtype', {bloodtype});
    } catch (err) {
      console.log(error);
      res.status(500).json(err);
    }
});
  
//TO DO: view patient by ID

//TO DO: update donor's record to indicate they attended their appoinment

//TO DO: update a donor's record to indicate how much blood they donated

//TO DO: view patients donating today

//TO DO: create new appointment

//TO DO: Delete donor's account



module.exports = router;