const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Donor, Appointment, Admin } = require('./../models');
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

  //serve login page 
  router.get('/login', (req, res) => {    
    
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
      //total amount of blood from all appointments for one donor
      const donorBlood = await Appointment.sum('amount_donated' , {
        where:{
          donor_id:req.session.user_id
        }
                
      }); 

      const bloodtot = {blood: donorBlood}

      console.log(donorBlood);
      // Find total blood donated

      res.render('donor', {
        ...donor,
        ...appointment,
        ...bloodtot,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }    
  });

  //serve admin dashboard page
  router.get('/admin', withAuth, async (req, res) => {    
    
      try {
        // Find the logged in user based on the session ID
        console.log("in admin homeroutes");
        console.log(req.session.user_id)
        const adminData = await Admin.findByPk(req.session.user_id, {
          attributes:  ['first_name','last_name', 'role'] ,
          
        });
        console.log(adminData);
        const admin = adminData.get({ plain: true });
        console.log(admin);
        res.render('admin', {
          ...admin,
          logged_in: true
        });
      } catch (err) {
        res.status(500).json(err);
      }    

  });



module.exports = router;