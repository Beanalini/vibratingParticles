const router = require('express').Router();
const { Donor } = require('../../models');
const withAuth = require('../../utils/auth');

//TO DO: pass helper utily function withAuth() as an argument inside get/post/update/delete requst's after login functionality is implemented
//TO DO: add re.render methods to parse data to handlebars



/**********Create Donor account*******************
/* Insomnia root: http://localhost:3001/api/donor/
/*To test using Insomnia make a POST request
 using this JSON object  in the body:
 {
    
    "first_name": "Sophia",
    "last_name": "Constantinou",
    "location": "Preston",
    "password": "Hyperbole",
    "contact_num": "07893775383",
    "sex": "female",
    "dob":"2000-12-23",
    "age":22,
    "email": "piggy@bt.com",
    "blood_type":"O+"
  }

*/

//Create Donor account: 
router.post('/', async (req, res) => {
    try {
      console.log("inside create donor account");
      console.log(req.body);
      const donorData = await Donor.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = donorData.id;
        req.session.logged_in = true;
  
        res.status(200).json(donorData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
});






  router.post('/login', async (req, res) => {
    try {
      console.log(req.body);
      const donorData = await Donor.findOne({ where: { email: req.body.donorEmail } });
      console.log(`Donor route: ${req.body.donorEmail}${req.body.donorPsw}`)
  
      if (!donorData) {
        console.log("email not found");
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      //console.log("email found");
      const validPassword = await donorData.checkPassword(req.body.donorPsw);
  
      if (!validPassword) {
        //console.log("password not found");
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      console.log("email and password ok");
      console.log(`Donor ID = ${donorData.donor_num} and ${donorData.id}`);
     

        
      req.session.save(() => {
        req.session.user_id = donorData.id;
        req.session.logged_in = true;
        req.session.donor_user = true;        
        console.log("saving session");
        if(req.session.donor_user) {
          console.log("this is a donor login");
        }
        res.json({ donor: donorData, message: 'You are now logged in!' });                  
      });
  
    } catch (err) {
      console.log("at the bottom");
      res.status(400).json(err);
    }
  });


//TO DO: Log out
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      console.log("204")
      res.status(204).end();
    });
  } else {
    console.log("404");
    res.status(404).end();
  }
});




module.exports = router;