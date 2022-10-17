const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Donor, Appointment } = require('./../models');
const { Op } = require("sequelize");

//serve homepage
router.get('/', async (req, res) => {
    try {
      console.log("serve homepage");
      res.render('homepage');
  
     
    } catch (err) {
      res.status(500).json(err);
    }
  });

//serve donor registration page
  router.get('/register', (req, res) => {   
    if (req.session.logged_in) {
      res.render('register');
      console.log("serve register point 1");
      return;
    }
    console.log("serve register point 2");
    res.render('register');
  });

  router.get('/register', async (req, res) => {   
   
  });


  //serve login page 
  router.get('/login', (req, res) => {    
    if (req.session.logged_in) {
      console.log("serve login point 1");
      res.render('login');
      return;
    }
    console.log("serve login point 2");
    res.render('login');
  });

//serve donor dashboard page
  router.get('/donor', async (req, res) => {    
    try {
      // Find donor data

      const donorData = await Donor.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] }
        });
        // Serialize data so the template can read it
        const donor = donorData.get({ plain: true });

      // Find appointment data
      const startDate = new Date();
      const endDateTemp = new Date();
      endDateTemp.setDate(endDateTemp.getDate() + 112)
      const endDate = new Date(endDateTemp);

      const appointmentData = await Appointment.findOne({ 
        where: {
          // date: {
          //   [Op.between]: [startDate, endDate]
          // },
          donor_id: {
            [Op.eq]: req.session.user_id
          }
        },
    
      });
      const appointment = appointmentData.get({ plain: true})


      // Find total blood donated

      res.render('donor', {
        ...donor,
        ...appointment,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }    
  });

  //serve admin dashboard page
  router.get('/admin', (req, res) => {    
    if (req.session.logged_in) {
      console.log("serve admin point 1");

      res.render('admin');
      return;
    }
    console.log("serve admin point 2");
    res.render('admin');
  });
/***********************************Donor Data****************************************** */
  //display donor details
  router.get('/donordata', async (req, res) => {
    console.log("inside home routes: get donor details");
    console.log(req.session.user_id);
  try {
    const donorData = await Donor.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }
      });
      console.log(donorData);
      // Serialize data so the template can read it
      const donor = donorData.get({ plain: true });
    console.log("serialised");  
    console.log(donor);
    // Pass serialized data and session flag into template
    //res.status(200).json(donorData);
      res.render('donor', {
        ...donor,
        logged_in: true
      });
    
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/donordata', async (req, res) => {
  console.log("inside home routes: get donor details");
  console.log(req.session.user_id);
try {
  const donorData = await Donor.findByPk(req.session.user_id, {
    attributes: { exclude: ['password'] }
    });
    console.log(donorData);
    // Serialize data so the template can read it
    const donor = donorData.get({ plain: true });
  console.log("serialised");  
  console.log(donor);
  // Pass serialized data and session flag into template
  //res.status(200).json(donorData);
    res.render('donor', {
      ...donor,
      logged_in: true
    });
  
  
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/nextAppointment', withAuth, async (req, res) => {
  try {
      const startDate = new Date();
      const endDateTemp = new Date();
      endDateTemp.setDate(endDateTemp.getDate() + 112)
      const endDate = new Date(endDateTemp);

      const appointmentData = await Appointment.findOne({ 
        where: {
          date: {
            [Op.between]: [startDate, endDate]
          },
          donor_id: {
            [Op.eq]: req.session.user_id
          }
        },
    
      });
      const appointment = appointmentData.get({ plain: true})

      console.log(appointment);
      res.render('donor', { ...appointment, logged_in: true }) 
    } catch (err) {
      res.status(500).json(err);
    }
});


/*NOTE:  The button from  the donorDash.handlebars works and the total amount of blooed donated is calculated but does not
work being rendered at this point - needs to be fetched using the API route then rendered dynamically
in public/js/donorDash.js file*/

router.get('/donorbloodDonated',  async (req, res) => {
   console.log(`blood donated for user with ID: ${req.session.user_id}`)
  try {
          
    const donorData = await Appointment.sum('amount_donated', {
      where:{
        donor_id:req.session.user_id
      }
              
    });          
    console.log(donorData);
    const donor = donorData.get({ plain: true });
    
    console.log(donor);
    res.render('donor', {
      ...donor,
      logged_in:true
      })
    
  } catch (err) {
    res.status(500).json(err);
  }
});
//To Do: any data that needs to be rendered for stats


module.exports = router;