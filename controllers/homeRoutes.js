const router = require('express').Router();
const withAuth = require('../utils/auth');


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
    if (req.session.logged_in) {
      console.log("serve login point 1");
      res.render('login');
      return;
    }
    console.log("serve login point 2");
    res.render('login');
  });

//serve donor dashboard page
  router.get('/donor', (req, res) => {    
    if (req.session.logged_in) {
      res.render('donor');
      console.log("serve donor point 1");
      return;
    }
    console.log("serve donor point 2");
    res.render('donor');
  });

  //serve donor dashboard page
  router.get('/admin', (req, res) => {    
    if (req.session.logged_in) {
      res.render('admin');
      console.log("serve admin point 1");
      return;
    }
    console.log("serve admin point 2");
    res.render('admin');
  });

//To Do: any data that needs to be rendered for stats


module.exports = router;