// api routes middleware goes into this file to be exported to controllers/index.js
const router = require('express').Router();

const  maintenanceRoutes = require('./maintenance-routes');
const vehicleRoutes = require ('./vehicle-routes');
const ownerRoutes = require('./owner-routes');

router.use('/maintenance', maintenanceRoutes);
router.use('/vehicles', vehicleRoutes);
router.use('/owners', ownerRoutes );

module.exports = router;