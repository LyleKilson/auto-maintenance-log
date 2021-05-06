// routes for user dashboard
const router = require('express').Router();
const sequelize= require('../config/connection');
const { Owner, Vehicle, MaintLog } = require('../models');

router.get('/', (req, res) => {
    res.render('dashboard',{loggedIn: true})
})

module.exports = router;




