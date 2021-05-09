// routes for user dashboard
const router = require('express').Router();
const sequelize= require('../config/connection');
const { Owner, Vehicle, MaintLog } = require('../models');
const auth = require('../utils/auth');


router.get('/', auth, (req, res) => {
    Vehicle.findAll({
        where: {
            owner_id: req.session.owner_id
        },
        attributes: [
                  'id',
                  'make',
                  'model',
                  'year',
                  'created_at'
                    ],
                    include: [
                        {
                            model: MaintLog,
                            attributes: ['id','last_oil_change', 'last_tire_rotation', 'last_spark_plugs', 'last_air_filter', 'notes', 'vehicle_id', 'owner_id']
                        }
                    ] 
    }).then(dbVehicleData => {
        const vehicle = dbVehicleData.map(vehicle => vehicle.get({plain: true}));
        res.render('dashboard',{vehicle, loggedIn: true})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', auth, (req, res) => {
    Vehicle.findOne({
        where: {
            id: req.params.id 
        },
        attributes: [
            'id',
                  'make',
                  'model',
                  'year',
                  'created_at'
        ]
    })
    .then(dbVehicleData => {
        if (!dbVehicleData) {
            res.status(404).json({message: 'no vehicle with that id'});
            return;
        }
        //serialize data for template
        const vehicle = dbVehicleData.get({plain:true});

        // pass to template
        res.render('vehicle-edit', {
            vehicle,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;




