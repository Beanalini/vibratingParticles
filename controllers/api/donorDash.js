const router = require('express').Router();
const { Donor, Appointment, } = require('../../models');
const withAuth = require('../../utils/auth');
const { Op } = require("sequelize");

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

  //Get donor data by id Insomnia root: http://localhost:3001/api/donorDash
  /*Eaxample of JSON object for testing with Insomnia
  {
    "email": taz@hotmail.com
    "password": "apple101",
  } */
  //TO DO: join with the Appointment table and find next appointment return all donor data (excluding password) and  next date As nextdate_don and time as nexttime_don 
    
  //[1] return a donor's details  [WORKING]
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




  /*[2] Donor's Next appointment: using session.user_id to identify the donor.  Currently set to return all appointments between current date and 16 weeks in the future.
  //This range was chosen to capture the minimum allowed time between donation appointments, which is 12 weeks for men and 16 for women WORKING*/

  router.get('/nextappointment', withAuth, async (req, res) => {
    
    console.log("next app")
    try {
        const startDate = new Date();
        const endDateTemp = new Date();
        endDateTemp.setDate(endDateTemp.getDate() + 112)
        const endDate = new Date(endDateTemp);

        console.log(startDate, endDate)
        console.log(startDate.toLocaleDateString(), endDate.toLocaleDateString())

         const donorData = await Appointment.findByPk(req.session.user_id,{ 
            where: {
              date: {
                [Op.between]: [startDate, endDate]
              }
            },
          
          });
      res.status(200).json(donorData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



  

 

  /*[3] Donor appointment history: using session.user_id to identify the donor.  Returns the donors appointments between current date and 365 days in the past.  
  This could be changed to allow donor to select the range by passing a value in the request body. WORKING*/
  router.get('/appointmentHist', withAuth, async (req, res) => {
       
    try {
        const startDate = new Date();
        const endDateTemp = new Date();
        endDateTemp.setDate(endDateTemp.getDate() - 365)
        const endDate = new Date(endDateTemp);

        console.log(startDate, endDate)
        console.log(startDate.toLocaleDateString(), endDate.toLocaleDateString())

         const donorData = await Appointment.findByPk(req.session.user_id,{
            where: {
              date: {
                [Op.between]: [startDate, endDate]
              }
            },
          });
      res.status(200).json(donorData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //[4] total amount of blood donoted on record by a donor WORKING
  router.get('/bloodDonated', withAuth, async (req, res) => {
   
    try {
            
      const donorData = await Appointment.sum('amount_donated', {
        where:{
          donor_id:req.session.user_id
        }
                
      });          
       
      res.status(200).json(donorData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//[5] donor's next appointment - this needs more seeds to test it's working properly NEEDS MORE TESTING
  router.get('/appointmentCurr', withAuth, async (req, res) => {
    console.log("next app")
    try {
        const startDate = new Date();
        console.log(startDate);
        console.log(startDate.toLocaleDateString());
       
         const donorData = await Appointment.findAll({          
            where: {
              date: startDate
            },
          
          });
      res.status(200).json(donorData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // [6]Delete donor account - probably should only be done from from Admin side? WORKING

router.delete('/remove', withAuth, async (req, res) => {
  try {
    const donorData = await Donor.destroy({
      where: {
        
        id: req.session.user_id,
      },
    });

    if (!donorData) {
      res.status(404).json({ message: 'Account not found!' });
      return;
    }

    res.status(200).json(donorData);
  } catch (err) {
    res.status(500).json(err);
  }

});


  


//TO DO: Update selected fields to be decided
router.put('/', withAuth, async (req, res) => {
    


});






module.exports = router;


