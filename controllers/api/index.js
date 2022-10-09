const router = require('express').Router();
const donorRoutes = require('./donorRoutes');
const adminRoutes = require('./adminRoutes');
const donorDash = require('./donorDash');
const adminDash = require('./adminDash');


router.use('/donor', donorRoutes);
router.use('/admin', adminRoutes);
router.use('/donorDash', donorDash);
router.use('/adminDash', adminDash);

module.exports = router;