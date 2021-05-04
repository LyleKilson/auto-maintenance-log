// dashboard, home, and api routes middleware for exportation on this file 
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports= router;