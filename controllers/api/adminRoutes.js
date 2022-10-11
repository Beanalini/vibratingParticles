const router = require('express').Router();
const { Admin, Donor, Appointment } = require('../../models');

//TO DO:  admin login
router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const adminData = await Admin.findOne({ where: { email: req.body.email } });

    if (!adminData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await adminData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = adminData.id;
      req.session.logged_in = true;
      
      res.json({ user: adminData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//TO DO: admin logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//included for testing of Admin table
router.get('/', async (req, res) => {
    try {
      const adminData = await Admin.findAll();
      res.status(200).json(adminData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;

