const router = require('express').Router();
const sequelize= require('../config/connection');
const { Owner, Vehicle, MaintLog } = require('../models');
const auth = require('../utils/auth');

router.get('/', auth,  (req, res) => {
    MaintLog.findAll({
        where: {
            owner_id: req.session.owner_id
        },
      
        attributes:  ['id','last_oil_change', 'last_tire_rotation', 'last_spark_plugs', 'last_air_filter', 'notes', 'vehicle_id', 'owner_id']
    }).then( dbMaintData => {
        const maintlog = dbMaintData.map(maintlog => maintlog.get({plain: true}))
        res.render('log', {maintlog, loggedIn: true})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/edit/:id', auth, (req, res) => {
    MaintLog.findOne({
        where: {
            id: req.params.id 
        },
        attributes: ['id','last_oil_change', 'last_tire_rotation', 'last_spark_plugs', 'last_air_filter', 'notes', 'vehicle_id', 'owner_id'],

    })
    .then(dbMaintData => {
        if(!dbMaintData) {
            res.status(404).json({message: 'no log with that id'});
            return;
        }
        // serialize the data
        const log = dbMaintData.get({plain: true});

        // put data in template
        res.render('edit-log', {
            log,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
   console.log(err);
   res.status(500).json(err);
    })
});


module.exports = router;





/*router.get('/log', (req, res) => {
    MaintLog.findAll({
        where: {
            owner_id: req.session.owner_id
        },
      
        attributes:  ['id','last_oil_change', 'last_tire_rotation', 'last_spark_plugs', 'last_air_filter', 'notes', 'vehicle_id', 'owner_id']
    }).then( dbMaintData => {
        const maintlog = dbMaintData.map(maintlog => maintlog.get({plain: true}))
        res.render('log', {maintlog, loggedIn: true})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
}) */