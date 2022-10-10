const router = require('express').Router();

//serve homepage
router.get('/', async (req, res) => {
    try {
      
      res.render('homepage');
  
     
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get('/register', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/register');
      return;
    }
  
    res.render('register');
  });

  

//To Do: any data that needs to be rendered for stats


module.exports = router;