const router = require('express').Router();
const { Admin } = require('../../models');


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

