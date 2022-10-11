const router = require('express').Router();
const { Donor, Appointment, Admin } = require('../../models');
const withAuth = require('../../utils/auth');


//TO DO: Get admin data to display on board e.g. name, role, location, employee ID

router.get('/data', withAuth, async (req, res) => {
  try {
    const adminData = await Admin.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }

    });
    res.status(200).json(adminData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//TO DO Get all patients by certain blood type

//[1] ADMIN: returns all donors in a location: WORKING
/*{
  "location": "Nottingham"
}*/
router.post('/donorLoc', withAuth, async (req, res) => {
  
  try {    

       const donorData = await Donor.findAll({
        attributes: { exclude: ['password'] },
        where:{location: req.body.location}
        
        });
    res.status(200).json(donorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//[2] ADMIN: returns all donors and their appointment history WORKING
router.get('/histLoc', withAuth, async (req, res) => {
 
  try {      

       const donorData = await Donor.findAll({
        include: [{
            model: Appointment,  as: "appointments"}]
        });
    res.status(200).json(donorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//[3] ADMIN Donors by blood type and location: WORKING 
/*{
    "blood_type": "A-",
    "location": "Leeds"
} */

router.post('/locBlood', withAuth, async (req, res) => {
  
  try {  
      const donorData = await Donor.findAll({
      where:{location: req.body.location, blood_type: req.body.blood_type}
      /*include: [{
          model: Appointment }]*/
      });
    res.status(200).json(donorData);
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;