const router = require('express').Router();
const { Donor, Appointment } = require('../../models');
const withAuth = require('../../utils/auth');

//This route is just for testing purposes - donor won't have access to all the data
//Get all donor information Insomnia root: http://localhost:3001/api/donor/
router.get('/', async (req, res) => {
    try {
      const donorData = await Donor.findAll();
      res.status(200).json(donorData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //Get donor data by id Insomnia root: http://localhost:3001/api/donor/id
  /*Eaxample of JSON object for testing with Insomnia
  {
    "email": taz@hotmail.com
    "password": "apple101",
  } */
  //TO DO: join with the Appointment table and find next appointment return all donor data (excluding password) and  next date As nextdate_don and time as nexttime_don 
    router.get('/data', withAuth, async (req, res) => {
    try {
      const donorData = await Donor.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] }

      });
      res.status(200).json(donorData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  /*TO DO:  appointments in the last 12 months order by date and where date is older than current date*/
  router.get('/appointmentHist', withAuth, async (req, res) => {
    try {
      const donorData = await Appointment.findByPk(req.session.date, req.session.time {


      } )
    }
    


  });

  //TO DO: next appointment

  router.get('/appointmentNext', withAuth, async (req, res) => {
    try {
      const donorData = await Appointment.findByPk(req.session.date, req.session.time {

      })
    }


});

//TO DO: Blood history: findAll appointments in the last 12 months and count amout of blood donated (need to take into account  a field could be null)

router.get('/bloodHist', withAuth, async (req, res) => {
    


});

//TO DO: Update selected fields to be decided
router.put('/', withAuth, async (req, res) => {
    


});


//TO DO: Delete donor account

router.delete('/', withAuth, async (req, res) => {
    


});



module.exports = router;


